import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const ASSETS_DIR = path.join(process.cwd(), "src", "assets");

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg"];

const FOLDER_RULES = {
  hero: { width: 1800, quality: 85 },
  gallery: { width: 1400, quality: 84 },
  products: { width: 900, quality: 82 },
  brands: { width: 500, quality: 90 },
  icons: { width: 256, quality: 95 },
};

let totalOriginal = 0;
let totalOptimized = 0;
let optimizedCount = 0;

async function getFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);

      return entry.isDirectory()
        ? getFiles(fullPath)
        : Promise.resolve(fullPath);
    })
  );

  return files.flat();
}

function getRule(file) {
  const normalized = file.replace(/\\/g, "/").toLowerCase();

  for (const folder of Object.keys(FOLDER_RULES)) {
    if (normalized.includes(`/${folder}/`)) {
      return FOLDER_RULES[folder];
    }
  }

  return {
    width: 1200,
    quality: 82,
  };
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();

  if (!IMAGE_EXTENSIONS.includes(ext)) return;

  const output = file.replace(ext, ".webp");

  try {
    await fs.access(output);
    console.log(`⏭ Skipped ${path.basename(output)}`);
    return;
  } catch {}

  const { width, quality } = getRule(file);

  const before = await fs.stat(file);

  await sharp(file)
    .resize({
      width,
      withoutEnlargement: true,
    })
    .webp({
      quality,
      effort: 6,
    })
    .toFile(output);

  const after = await fs.stat(output);

  totalOriginal += before.size;
  totalOptimized += after.size;
  optimizedCount++;

  const saved = (
    ((before.size - after.size) / before.size) *
    100
  ).toFixed(1);

  console.log(
    `✔ ${path.basename(file)} → ${path.basename(output)} (${saved}% smaller)`
  );
}

(async () => {
  console.log("\nOptimizing images...\n");

  const files = await getFiles(ASSETS_DIR);

  for (const file of files) {
    await optimize(file);
  }

  console.log("\n--------------------------------------");

  console.log(`Images Optimized : ${optimizedCount}`);

  console.log(
    `Original Size    : ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`
  );

  console.log(
    `Optimized Size   : ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`
  );

  console.log(
    `Saved            : ${(
      ((totalOriginal - totalOptimized) / totalOriginal) *
      100
    ).toFixed(1)}%`
  );

  console.log("--------------------------------------\n");
})();