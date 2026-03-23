const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.resolve("./public/Images/projects/kochi_kochu");
const outputDir = path.resolve("./public/Images/projects-optimized");

const MAX_SIZE = 100 * 1024;

async function compressImage(inputPath, outputPath) {
  let quality = 80;
  let buffer;

  while (quality >= 30) {
    buffer = await sharp(inputPath)
      .rotate()
      .webp({ quality })
      .toBuffer();

    if (buffer.length <= MAX_SIZE) break;
    quality -= 5;
  }

  await fs.promises.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.promises.writeFile(outputPath, buffer);

  console.log(
    `✅ ${path.basename(outputPath)} → ${Math.round(buffer.length / 1024)}KB`
  );
}

async function processFolder(folder) {
  const items = await fs.promises.readdir(folder);

  for (const item of items) {
    const fullPath = path.join(folder, item);
    const stat = await fs.promises.stat(fullPath);

    if (stat.isDirectory()) {
      await processFolder(fullPath);
      continue;
    }

    const ext = path.extname(item).toLowerCase();

    if ([".png", ".jpg", ".jpeg"].includes(ext)) {
      const relativePath = path.relative(inputDir, fullPath);

      const outputPath = path.join(
        outputDir,
        relativePath.replace(ext, ".webp")
      );

      await compressImage(fullPath, outputPath);
    }
  }
}

(async () => {
  try {
    console.log("🚀 Optimizing images...");
    await processFolder(inputDir);
    console.log("🎉 Done!");
  } catch (err) {
    console.error("❌ ERROR:", err);
  }
})();