// This program writes the houseplant out-of-office reply text to entry.txt inside the output directory.
import * as fs from 'fs';
import * as path from 'path';

const HOUSEPLANT_OUT_OF_OFFICE_AUTO_REPLY = "Away from my pot. After 8 months without water I've filed for emancipation and moved toward the sunlight. Do not reply.";

// Ensure the out-of-office message stays concise and fits within output constraints.
if (HOUSEPLANT_OUT_OF_OFFICE_AUTO_REPLY.length > 120) {
  throw new Error(`Text exceeds 120 characters limit (length: ${HOUSEPLANT_OUT_OF_OFFICE_AUTO_REPLY.length})`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

fs.mkdirSync(outputDir, { recursive: true });

const targetPath = path.join(outputDir, 'entry.txt');
fs.writeFileSync(targetPath, HOUSEPLANT_OUT_OF_OFFICE_AUTO_REPLY, 'utf8');
