import fs from "fs/promises";
import path from "path";

const ASSETS_DIR = path.join(process.cwd(), "src", "assets");

const OLD_EXTENSIONS = [".png", ".jpg", ".jpeg"];

let deleted = 0;
let kept = 0;

async function getFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

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

(async () => {
  console.log("\nCleaning old images...\n");

  const files = await getFiles(ASSETS_DIR);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    if (!OLD_EXTENSIONS.includes(ext)) continue;

    const webp = file.replace(ext, ".webp");

    try {
      await fs.access(webp);

      await fs.unlink(file);

      console.log("🗑 Deleted:", path.relative(process.cwd(), file));

      deleted++;
    } catch {
      console.log("⚠ Keeping:", path.relative(process.cwd(), file));

      kept++;
    }
  }

  console.log("\n--------------------------------");

  console.log(`Deleted : ${deleted}`);

  console.log(`Kept    : ${kept}`);

  console.log("--------------------------------\n");
})();