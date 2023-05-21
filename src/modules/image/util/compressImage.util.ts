import * as sharp from 'sharp';

export async function compressImage(
  imagePath: string,
  compressionFactor: number,
): Promise<void> {
  await sharp(imagePath).jpeg({ quality: compressionFactor }).toFile(imagePath);
}
