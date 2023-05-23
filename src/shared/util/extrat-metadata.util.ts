import * as sharp from 'sharp';
import { ExtractMetadataException } from '../exceptions/extrat-metadata.exception';

export async function extratMetadata(path: string): Promise<sharp.Metadata> {
  try {
    return await sharp(path).metadata();
  } catch (error) {
    throw new ExtractMetadataException(error.message);
  }
}
