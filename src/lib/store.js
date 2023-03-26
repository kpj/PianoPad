import { writable } from "svelte/store";

export const activeNotes = writable([]);
export const currentTime = writable(0);
