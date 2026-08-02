import fs from "fs/promises";
import path from "path";

const SRC_DIR = path.join(process.cwd(), "src");

const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx", ".css"];

let filesUpdated = 0;
let replacements = 0;

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

function replaceImports(content) {
  let count = 0;

  const updated = content.replace(
    /(?<!https?:\/\/)(\.(png|jpg|jpeg))/gi,
    () => {
      count++;
      return ".webp";
    }
  );

  return {
    updated,
    count,
  };
}

(async () => {
  console.log("\nUpdating image imports...\n");

  const files = await getFiles(SRC_DIR);

  for (const file of files) {
    if (!EXTENSIONS.includes(path.extname(file))) continue;

    const original = await fs.readFile(file, "utf8");

    const { updated, count } = replaceImports(original);

    if (count > 0) {
      await fs.writeFile(file, updated);

      filesUpdated++;
      replacements += count;

      console.log(
        `✔ ${path.relative(process.cwd(), file)} (${count} replacements)`
      );
    }
  }

  console.log("\n--------------------------------");

  console.log(`Files Updated : ${filesUpdated}`);

  console.log(`Imports Fixed : ${replacements}`);

  console.log("--------------------------------\n");
})();