import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line a vending machine would use on a passing human.
// First person, machine voice; B7, chips, exact change, coils — the
// machine's own world; the joke lands on the last few words.
const LINE =
  "I'm not like other vending machines — when I fall for you, I actually drop. No shaking required.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
