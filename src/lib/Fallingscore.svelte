<script>
    import { currentTime } from "./store";

    export let musicScore;
    console.log(musicScore);

    import { onMount } from "svelte";

    onMount(async () => {
        musicScore = musicScore; // update view
    });

    let note2pos = (note) => {
        let element = document.getElementsByClassName(
            `key${note.originalNote.name}`
        )[0];

        if (element === undefined) {
            return 0;
        }

        return element.getBoundingClientRect().x;
    };
</script>

<div id="fallingscore">
    {#each musicScore as note, i}
        <div
            class="fallingNote"
            style="--yPosition: {644 +
                // note.originalNote.time * 50 -
                -14 * i -
                $currentTime}px; --xPosition: {note2pos(note)}px;"
        >
            {note.originalNote.name}
        </div>
    {/each}
</div>

<style>
    #fallingscore {
        height: 200px;
        border: 1px solid black;
    }

    .fallingNote {
        position: absolute;
        top: var(--yPosition);
        left: var(--xPosition);
        width: 15px;
        height: 10px;
        border: 1px solid black;
        background-color: red;
        font-size: xx-small;
    }
</style>
