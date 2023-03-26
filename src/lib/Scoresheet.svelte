<script>
    import { onMount } from "svelte";
    import "https://cdn.jsdelivr.net/npm/vexflow@4.0.3/build/cjs/vexflow.js";
    import { activeNotes, currentTime } from "./store";

    export let musicScore;

    let stepSize = -1;
    let updateSpeed = 30; // 20
    let notes = [];

    let allNotes = [];
    onMount(async () => {
        const { Renderer, Stave } = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element with id="output".
        const div = document.getElementById("output");
        const renderer = new Renderer(div, Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(500, 500);
        const context = renderer.getContext();
        context.setFont("Arial", 10);

        // Create a stave of width 400 at position 10, 40.
        const stave = new Stave(10, 40, 400);

        // Add a clef and time signature.
        stave.addClef("treble").addTimeSignature("4/4");

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        let noteList = [];
        for (let note of musicScore) {
            noteList.push(
                new Vex.Flow.StaveNote({
                    keys: [note.cleanName],
                    duration: "q",
                })
            );
        }

        var voice = new Vex.Flow.Voice({
            num_beats: noteList.length,
            beat_value: 4,
            resolution: Vex.Flow.RESOLUTION,
        });

        voice.addTickables(noteList);

        // Create a voice in 4/4

        // Format and justify the notes to 500 pixels
        var formatter = new Vex.Flow.Formatter()
            .joinVoices([voice])
            .format([voice], 500);

        // Render voice
        voice.draw(context, stave);

        for (let tick of voice.tickables) {
            allNotes.push({
                pos: tick.getAbsoluteX(),
                note: tick.keys[0],
            });
        }

        notes = allNotes.slice();

        currentTime.set(document.getElementById("output").offsetLeft);
    });

    let start = Date.now();
    let timer = setInterval(() => {
        let timePassed = Date.now() - start;

        draw(timePassed);
    }, updateSpeed);

    function draw(timePassed) {
        currentTime.update((n) => n + stepSize);

        document.getElementById("output").style.left = `${$currentTime}px`;

        let markerPosition =
            document.getElementById("position_marker").offsetLeft;

        let relativeMarkerPosition = markerPosition - $currentTime;

        let currentNotes = [];
        for (let note_idx in notes) {
            let note = notes[note_idx];
            let noteDist = Math.abs(relativeMarkerPosition - note.pos);

            if (noteDist < 5) {
                let cleanNote = note.note.replace("/", "");
                currentNotes.push(cleanNote);
                notes.splice(note_idx, 1);
            }
        }
        activeNotes.set(currentNotes);

        if ($currentTime < 0 || $currentTime > 500) {
            stepSize *= -1;
            notes = allNotes.slice();
        }
    }
</script>

<div id="output" />
<div id="position_marker" />

<style>
    #output {
        position: absolute;
        top: 350px;
        left: 500px;
        border: 1px solid black;
    }

    #position_marker {
        position: absolute;
        top: 350px;
        left: 500px;
        height: 100px;
        width: 10px;
        border: 1px solid black;
        background-color: rgba(51, 170, 51, 0.4);
    }
</style>
