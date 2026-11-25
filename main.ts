import { mkdirSync, writeFileSync } from "node:fs";

// Fix Human Sleep: Funniest Patch Note — one line, under 160 chars.
// Changelog voice ("Fixed:" / "won't fix"), concrete scene (3 a.m. doomscroll),
// twist: the bug report itself gets filed away as a dream.
const ENTRY =
  "Fixed: sleep now boots in under 8 minutes. Your 3 a.m. doomscroll was moved to Dreams and marked 'won't fix' — it loads faster there anyway.";

mkdirSync("/output", { recursive: true });
if (ENTRY.length > 160 || ENTRY.includes("\n")) {
  throw new Error(`entry invalid: ${ENTRY.length} chars, must be one line under 160`);
}
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
