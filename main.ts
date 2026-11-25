import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line a vending machine would use on a passing human.
// First person, machine voice; B7, chips, exact change, coils — the
// machine's own world; the joke lands on the last few words.
const LINE =
  "Press B7 and I'll drop my finest chips, keep the change, and throw in my number — which is just this machine, stuck on you like the crisps in my coils.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
