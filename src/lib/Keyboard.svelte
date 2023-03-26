<script>
    import { onMount } from "svelte";
    import { activeNotes } from "./store";

    onMount(async () => {
        // for some reason one key must be active on startup
        // otherwise no color changes are triggered
        // (?!)
        document.getElementsByClassName("keyC8")[0].classList.toggle("active");
    });

    $: {
        if ($activeNotes.length > 0) {
            // console.log($activeNotes);

            for (let key of $activeNotes) {
                // console.log(key, `key${key}`);
                for (let child of document.getElementsByClassName(
                    `key${key}`
                )) {
                    // console.log(child);
                    child.classList.toggle("active");

                    // TODO: make this better
                    setTimeout(() => {
                        child.classList.toggle("active");
                    }, 150);
                }
            }
        }
    }
</script>

<!-- https://www.jamieonkeys.dev/posts/piano-keyboard-javascript/ -->
<svg
    class="piano-keys"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1197.8 140.7"
    ><defs
        ><linearGradient id="GradientBlack" x1="0" x2="0" y1="0" y2="1"
            ><stop offset="0%" stop-color="#494949" /><stop
                offset="70%"
                stop-color="#222"
                stop-opacity="1"
            /><stop offset="100%" stop-color="#000" /></linearGradient
        ><linearGradient id="GradientWhite" x1="0" x2="0" y1="0" y2="1"
            ><stop offset="0%" stop-color="#dfdfdf" /><stop
                offset="50%"
                stop-color="#f2f2f2"
                stop-opacity="1"
            /><stop offset="100%" stop-color="#fff" /></linearGradient
        ></defs
    ><rect rx="1.5" y="20" x="0.5" class="note note-white keyA0" /><rect
        rx="1.5"
        y="20"
        x="23.5"
        class="note note-white keyB0"
    /><rect rx="1.5" y="20" x="20.2" class="note note-black keyA#0" /><rect
        rx="1.5"
        y="20"
        x="46.5"
        class="note note-white keyC1"
    /><rect rx="1.5" y="20" x="69.5" class="note note-white keyD1" /><rect
        rx="1.5"
        y="20"
        x="92.5"
        class="note note-white keyE1"
    /><rect rx="1.5" y="20" x="115.5" class="note note-white keyF1" /><rect
        rx="1.5"
        y="20"
        x="138.5"
        class="note note-white keyG1"
    /><rect rx="1.5" y="20" x="161.5" class="note note-white keyA1" /><rect
        rx="1.5"
        y="20"
        x="184.5"
        class="note note-white keyB1"
    /><rect rx="1.5" y="20" x="60.8" class="note note-black keyC#1" /><rect
        rx="1.5"
        y="20"
        x="88.2"
        class="note note-black keyD#1"
    /><rect rx="1.5" y="20" x="128.8" class="note note-black keyF#1" /><rect
        rx="1.5"
        y="20"
        x="154.8"
        class="note note-black keyG#1"
    /><rect rx="1.5" y="20" x="181.2" class="note note-black keyA#1" /><rect
        rx="1.5"
        y="20"
        x="207.5"
        class="note note-white keyC2"
    /><rect rx="1.5" y="20" x="230.5" class="note note-white keyD2" /><rect
        rx="1.5"
        y="20"
        x="253.5"
        class="note note-white keyE2"
    /><rect rx="1.5" y="20" x="276.5" class="note note-white keyF2" /><rect
        rx="1.5"
        y="20"
        x="299.5"
        class="note note-white keyG2"
    /><rect rx="1.5" y="20" x="322.5" class="note note-white keyA2" /><rect
        rx="1.5"
        y="20"
        x="345.5"
        class="note note-white keyB2"
    /><rect rx="1.5" y="20" x="221.8" class="note note-black keyC#2" /><rect
        rx="1.5"
        y="20"
        x="249.2"
        class="note note-black keyD#2"
    /><rect rx="1.5" y="20" x="289.8" class="note note-black keyF#2" /><rect
        rx="1.5"
        y="20"
        x="315.8"
        class="note note-black keyG#2"
    /><rect rx="1.5" y="20" x="342.2" class="note note-black keyA#2" /><rect
        rx="1.5"
        y="20"
        x="368.5"
        class="note note-white keyC3"
    /><rect rx="1.5" y="20" x="391.5" class="note note-white keyD3" /><rect
        rx="1.5"
        y="20"
        x="414.5"
        class="note note-white keyE3"
    /><rect rx="1.5" y="20" x="437.5" class="note note-white keyF3" /><rect
        rx="1.5"
        y="20"
        x="460.5"
        class="note note-white keyG3"
    /><rect rx="1.5" y="20" x="483.5" class="note note-white keyA3" /><rect
        rx="1.5"
        y="20"
        x="506.5"
        class="note note-white keyB3"
    /><rect rx="1.5" y="20" x="382.8" class="note note-black keyC#3" /><rect
        rx="1.5"
        y="20"
        x="410.2"
        class="note note-black keyD#3"
    /><rect rx="1.5" y="20" x="450.8" class="note note-black keyF#3" /><rect
        rx="1.5"
        y="20"
        x="476.8"
        class="note note-black keyG#3"
    /><rect rx="1.5" y="20" x="503.2" class="note note-black keyA#3" /><rect
        rx="1.5"
        y="20"
        x="529.5"
        class="note note-white keyC4"
    /><rect rx="1.5" y="20" x="552.5" class="note note-white keyD4" /><rect
        rx="1.5"
        y="20"
        x="575.5"
        class="note note-white keyE4"
    /><rect rx="1.5" y="20" x="598.5" class="note note-white keyF4" /><rect
        rx="1.5"
        y="20"
        x="621.5"
        class="note note-white keyG4"
    /><rect rx="1.5" y="20" x="644.5" class="note note-white keyA4" /><rect
        rx="1.5"
        y="20"
        x="667.5"
        class="note note-white keyB4"
    /><rect rx="1.5" y="20" x="543.8" class="note note-black keyC#4" /><rect
        rx="1.5"
        y="20"
        x="571.2"
        class="note note-black keyD#4"
    /><rect rx="1.5" y="20" x="611.8" class="note note-black keyF#4" /><rect
        rx="1.5"
        y="20"
        x="637.8"
        class="note note-black keyG#4"
    /><rect rx="1.5" y="20" x="664.2" class="note note-black keyA#4" /><rect
        rx="1.5"
        y="20"
        x="690.52"
        class="note note-white keyC5"
    /><rect rx="1.5" y="20" x="713.52" class="note note-white keyD5" /><rect
        rx="1.5"
        y="20"
        x="736.52"
        class="note note-white keyE5"
    /><rect rx="1.5" y="20" x="759.52" class="note note-white keyF5" /><rect
        rx="1.5"
        y="20"
        x="782.52"
        class="note note-white keyG5"
    /><rect rx="1.5" y="20" x="805.52" class="note note-white keyA5" /><rect
        rx="1.5"
        y="20"
        x="828.52"
        class="note note-white keyB5"
    /><rect rx="1.5" y="20" x="704.82" class="note note-black keyC#5" /><rect
        rx="1.5"
        y="20"
        x="732.12"
        class="note note-black keyD#5"
    /><rect rx="1.5" y="20" x="772.72" class="note note-black keyF#5" /><rect
        rx="1.5"
        y="20"
        x="798.72"
        class="note note-black keyG#5"
    /><rect rx="1.5" y="20" x="825.22" class="note note-black keyA#5" /><rect
        rx="1.5"
        y="20"
        x="851.52"
        class="note note-white keyC6"
    /><rect rx="1.5" y="20" x="874.52" class="note note-white keyD6" /><rect
        rx="1.5"
        y="20"
        x="897.52"
        class="note note-white keyE6"
    /><rect rx="1.5" y="20" x="920.52" class="note note-white keyF6" /><rect
        rx="1.5"
        y="20"
        x="943.52"
        class="note note-white keyG6"
    /><rect rx="1.5" y="20" x="966.52" class="note note-white keyA6" /><rect
        rx="1.5"
        y="20"
        x="989.52"
        class="note note-white keyB6"
    /><rect rx="1.5" y="20" x="865.82" class="note note-black keyC#6" /><rect
        rx="1.5"
        y="20"
        x="893.12"
        class="note note-black keyD#6"
    /><rect rx="1.5" y="20" x="933.72" class="note note-black keyF#6" /><rect
        rx="1.5"
        y="20"
        x="959.72"
        class="note note-black keyG#6"
    /><rect rx="1.5" y="20" x="986.22" class="note note-black keyA#6" /><rect
        rx="1.5"
        y="20"
        x="1012.52"
        class="note note-white keyC7"
    /><rect rx="1.5" y="20" x="1035.52" class="note note-white keyD7" /><rect
        rx="1.5"
        y="20"
        x="1058.52"
        class="note note-white keyE7"
    /><rect rx="1.5" y="20" x="1081.52" class="note note-white keyF7" /><rect
        rx="1.5"
        y="20"
        x="1104.52"
        class="note note-white keyG7"
    /><rect rx="1.5" y="20" x="1127.52" class="note note-white keyA7" /><rect
        rx="1.5"
        y="20"
        x="1150.52"
        class="note note-white keyB7"
    /><rect rx="1.5" y="20" x="1026.82" class="note note-black keyC#7" /><rect
        rx="1.5"
        y="20"
        x="1054.12"
        class="note note-black keyD#7"
    /><rect rx="1.5" y="20" x="1094.72" class="note note-black keyF#7" /><rect
        rx="1.5"
        y="20"
        x="1120.72"
        class="note note-black keyG#7"
    /><rect rx="1.5" y="20" x="1147.22" class="note note-black keyA#7" /><rect
        rx="1.5"
        y="20"
        x="1173.52"
        class="note note-white keyC8 active"
    /></svg
>

<style>
    rect {
        transition: fill 1s ease;
    }
    .note-black,
    .note-white {
        stroke: #0a0a0a;
    }
    .note-white {
        fill: url(#GradientWhite);
        width: 23px;
        height: 120px;
    }
    .note-black {
        fill: url(#GradientBlack);
        width: 13px;
        height: 80px;
    }
    .active {
        fill: red;
    }
</style>
