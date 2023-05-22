import * as sharp from 'sharp';

export async function extratMetadata(path: string): Promise<sharp.Metadata> {
  return await sharp(path).metadata();
}
