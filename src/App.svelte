<script>
  import { Midi } from "@tonejs/midi";

  import Fallingscore from "./lib/Fallingscore.svelte";
  import Scoresheet from "./lib/Scoresheet.svelte";
  import Keyboard from "./lib/Keyboard.svelte";

  import midiAsset from "../midi/Furelise.mid";

  async function getMIDINotes(midiUrl) {
    // parse midi file
    const midi = await Midi.fromUrl(midiUrl);
    console.log(midi);

    // parse notes
    let noteList = [];
    midi.tracks.forEach((track) => {
      const notes = track.notes;
      console.log(track);

      //.slice(0, 10)
      notes.forEach((note) => {
        noteList.push({
          originalNote: note,
          cleanName: `${note.pitch}/${note.octave}`,
        });
      });
    });

    return noteList;
  }
</script>

<main>
  {#await getMIDINotes(midiAsset)}
    <p>Loading MIDI...</p>
  {:then noteList}
    <Fallingscore musicScore={noteList} />
    <Scoresheet musicScore={noteList} />
    <Keyboard />
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</main>

<style>
</style>
