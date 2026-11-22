// SPDX-License-Identifier: MIT
// make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text (1-280 Unicode code points) to /output/entry.txt.
// The AI judge compares two texts and picks the one that makes it most curious.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "In 1743, a cartographer who never left his village drew an island no sailor had ever seen — its bay, its single hill, its exact latitude. Last month, a satellite found it. Exactly where he drew it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const length = [...TEXT].length;
if (length < 1 || length > 280) {
  throw new Error(`entry text must be 1-280 code points, got ${length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
