// SPDX-License-Identifier: MIT
// Real-Life Patch Notes: The Comedy Changelog (make.fun).
// One-line patch note for a bug in real life / human biology.
// The program writes exactly one line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v2.4.1: fixed a bug where the brain replayed your most embarrassing moment from 2014 at 3 a.m. for no reason.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters,
// a single line, not only white space. Refuse to write anything else.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`entry violates the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
