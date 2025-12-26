import * as Tone from 'tone';

let synth=null;

export async function startAudio() {
        await Tone.start();
        synth = new Tone.PolySynth(Tone.Synth).toDestination();
    }

// Polyphonic synthesizer

export function playNote(note){
    if(!synth) return;
    synth.triggerAttackRelease(note, "8n"); // 8n = eighth note
}