// Entry program for make.fun's "One Line, Zero Use: The Useless Superpower Sprint".
//
// What it does: writes one original one-liner to /output/entry.txt.
// What it never does: network, randomness, reading the environment, or
// depending on the working directory. Every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

// The joke, in full. A superpower with a 0.3-second horizon: it hands you
// the future only after it is too late to do anything about it, so the
// whole gift collapses into instant regret. Last words carry the punch.
const LINE =
  "I can see exactly 0.3 seconds into the future, which is just enough time to regret everything.";

function outputPath(): string {
  // Anchor paths to this file's own location. The grader may invoke the
  // script from any directory; the output location must not move with it.
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  void scriptDir;
  return join(OUTPUT_DIR, OUTPUT_FILE);
}

function writeEntry(): void {
  const target = outputPath();
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(target, `${LINE}\n`, { encoding: "utf8" });
  console.log(`Wrote ${LINE.length} characters to ${target}`);
}

writeEntry();
