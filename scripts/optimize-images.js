import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const INPUT_DIR = path.join(process.cwd(), "src", "assets");
const OUTPUT_DIR = path.join(process.cwd(), "src", "assets-optimized");

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];

// Target sizes
const RULES = {
  hero: { width: 1600, targetKB: 200, startQuality: 75 },
  gallery: { width: 1200, targetKB: 90, startQuality: 72 },
  products: { width: 800, targetKB: 60, startQuality: 70 },
  categories: { width: 700, targetKB: 45, startQuality: 72 },
  brands: { width: 450, targetKB: 30, startQuality: 82 },
  icons: { width: 128, targetKB: 10, startQuality: 90 },
};

let totalBefore = 0;
let totalAfter = 0;
let optimized = 0;
let skipped = 0;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);

      return entry.isDirectory()
        ? walk(full)
        : Promise.resolve(full);
    })
  );

  return files.flat();
}

function getRule(file) {
  const normalized = file.replace(/\\/g, "/").toLowerCase();

  for (const key of Object.keys(RULES)) {
    if (normalized.includes(`/${key}/`)) {
      return RULES[key];
    }
  }

  return {
    width: 1200,
    targetKB: 80,
    startQuality: 70,
  };
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();

  if (!IMAGE_EXTENSIONS.includes(ext)) return;

  const relative = path.relative(INPUT_DIR, file);

  const output = path.join(
    OUTPUT_DIR,
    relative.replace(ext, ".webp")
  );

  await fs.mkdir(path.dirname(output), { recursive: true });

  const before = await fs.stat(file);

  const { width, targetKB, startQuality } = getRule(file);

  // Skip already small images
  if (before.size <= targetKB * 1024) {
    skipped++;

    await fs.copyFile(file, output);

    console.log(
      `✓ ${relative} already ${(before.size / 1024).toFixed(0)} KB`
    );

    return;
  }

  let quality = startQuality;
  let buffer;

  while (quality >= 35) {
    buffer = await sharp(file)
      .rotate()
      .resize({
        width,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality,
        effort: 6,
        smartSubsample: true,
      })
      .toBuffer();

    if (buffer.length <= targetKB * 1024) {
      break;
    }

    quality -= 5;
  }

  await fs.writeFile(output, buffer);

  const after = await fs.stat(output);

  optimized++;

  totalBefore += before.size;
  totalAfter += after.size;

  const saved = (
    ((before.size - after.size) / before.size) *
    100
  ).toFixed(1);

  console.log(
    `✔ ${relative}
   ${(before.size / 1024).toFixed(0)} KB → ${(after.size / 1024).toFixed(0)} KB
   Quality: ${quality}
   Saved: ${saved}%`
  );
}

(async () => {
  console.log("\n🚀 Optimizing Images...\n");

  const files = await walk(INPUT_DIR);

  for (const file of files) {
    await optimize(file);
  }

  console.log("\n----------------------------------------");

  console.log(`Optimized : ${optimized}`);
  console.log(`Skipped   : ${skipped}`);

  console.log(
    `Original  : ${(totalBefore / 1024 / 1024).toFixed(2)} MB`
  );

  console.log(
    `Optimized : ${(totalAfter / 1024 / 1024).toFixed(2)} MB`
  );

  if (totalBefore > 0) {
    console.log(
      `Saved     : ${(
        ((totalBefore - totalAfter) / totalBefore) *
        100
      ).toFixed(1)}%`
    );
  }

  console.log("----------------------------------------");
  console.log(`Output folder: ${OUTPUT_DIR}\n`);
})();