// A Day of One-Line Pitches — u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
// One sentence, at most 240 characters, pitched to a friend who has never coded.
// Writes one original sentence (<= 240 chars) to /output/entry.txt.
// The pitch speaks to a friend who has never coded: describe the app in
// plain words, try a real first version tonight, no code and no lessons.
// Deterministic: no input, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Tell it the app you've been picturing in your head, in your own words, and by tonight you'll be tapping around a real first version of it \u2014 no code, no lessons, just your idea finally working.";

if (PITCH.length < 1 || PITCH.length > 240) {
  throw new Error(`pitch must be 1-240 characters, got ${PITCH.length}`);
}
if (PITCH.trim().length === 0) {
  throw new Error("pitch must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`wrote ${PITCH.length} chars to /output/entry.txt`);
