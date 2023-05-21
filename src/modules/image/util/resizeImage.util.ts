import * as sharp from 'sharp';

export async function resizeImage(
  inputPath: string,
  outputPath: string,
  targetDimension: number,
): Promise<void> {
  await sharp(inputPath)
    .resize(targetDimension, targetDimension, {
      fit: sharp.fit.inside,
    })
    .toFile(outputPath);
}
