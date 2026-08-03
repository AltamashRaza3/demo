import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const ASSETS_DIR = path.join(process.cwd(), "src", "assets");

// Supported formats
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];

// Folder specific optimization rules
const FOLDER_RULES = {
  hero: {
    width: 1600,
    quality: 68,
  },

  gallery: {
    width: 1100,
    quality: 55,
  },

  products: {
    width: 750,
    quality: 58,
  },

  categories: {
    width: 700,
    quality: 60,
  },

  brands: {
    width: 450,
    quality: 78,
  },

  icons: {
    width: 128,
    quality: 90,
  },
};

let totalOriginal = 0;
let totalOptimized = 0;
let optimizedCount = 0;

async function getFiles(dir) {
  const entries = await fs.readdir(dir, {
    withFileTypes: true,
  });

  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);

      return entry.isDirectory()
        ? getFiles(full)
        : Promise.resolve(full);
    })
  );

  return files.flat();
}

function getRule(file) {
  const normalized = file.replace(/\\/g, "/").toLowerCase();

  for (const folder in FOLDER_RULES) {
    if (normalized.includes(`/${folder}/`)) {
      return FOLDER_RULES[folder];
    }
  }

  return {
    width: 1200,
    quality: 60,
  };
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();

  if (!IMAGE_EXTENSIONS.includes(ext)) return;

  const isWebp = ext === ".webp";

  const output = isWebp
    ? file.replace(".webp", ".tmp.webp")
    : file.replace(ext, ".webp");

  const { width, quality } = getRule(file);

  const before = await fs.stat(file);

  try {
    await sharp(file)
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
        nearLossless: false,
        alphaQuality: 80,
      })
      .toFile(output);

    if (isWebp) {
      await fs.unlink(file);
      await fs.rename(output, file);
    }

    const finalFile = isWebp ? file : output;

    const after = await fs.stat(finalFile);

    totalOriginal += before.size;
    totalOptimized += after.size;
    optimizedCount++;

    const saved = (
      ((before.size - after.size) / before.size) *
      100
    ).toFixed(1);

    console.log(
      `✔ ${path.basename(file)} → ${path.basename(finalFile)} (${saved}% smaller)`
    );
  } catch (err) {
    console.error(`✖ Failed: ${file}`);
    console.error(err.message);
  }
}

(async () => {
  console.log("\n🚀 Optimizing Images...\n");

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