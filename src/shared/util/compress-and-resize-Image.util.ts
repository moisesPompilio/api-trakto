import * as sharp from 'sharp';
import { CompressAndResizeImageException } from '../exceptions/compress-and-resize-Image.exception';

export async function compressAndResizeImage(
  originalImagePath: string,
  widtDimension: number,
  heightDimension: number,
  compressionFactor: number,
  newImagePath: string,
): Promise<void> {
  try {
    await sharp(originalImagePath)
      .resize(widtDimension, heightDimension, {
        fit: sharp.fit.inside,
      })
      .jpeg({ quality: compressionFactor })
      .toFile(newImagePath);
  } catch (error) {
    throw new CompressAndResizeImageException(error.message);
  }
}
