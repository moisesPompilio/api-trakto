import * as sharp from 'sharp';

export async function compressAndResizeImage(
  originalImagePath: string,
  widtDimension: number,
  heightDimension: number,
  compressionFactor: number,
  newImagePath: string,
): Promise<void> {
  await sharp(originalImagePath)
    .resize(widtDimension, heightDimension, {
      fit: sharp.fit.inside,
    })
    .jpeg({ quality: compressionFactor })
    .toFile(newImagePath);
}
