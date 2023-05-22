import * as sharp from 'sharp';

export async function resizeImage(
  originalImagePath: string,
  newImagePath: string,
  targetDimension: number,
): Promise<void> {
  await sharp(originalImagePath)
    .resize(targetDimension, targetDimension, {
      fit: sharp.fit.inside,
    })
    .toFile(newImagePath);
}
