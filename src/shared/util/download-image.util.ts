import axios from 'axios';
import * as fs from 'fs';
import { CustomException } from '../exceptions/custom.exception';
import { DowloadException } from '../exceptions/dowload.exception';

export async function downloadImage(
  url: string,
  filePath: string,
): Promise<void> {
  try {
    const response = await axios.get(url, { responseType: 'stream' });
    const contentType = response.headers['content-type'];
    if (!contentType || !contentType.startsWith('image/')) {
      throw new DowloadException('Error downloading image. unsupported image');
    }

    response.data.pipe(fs.createWriteStream(filePath));

    return new Promise<void>((resolve, reject) => {
      response.data.on('end', resolve);
      response.data.on('error', reject);
    });
  } catch (error) {
    if (error instanceof CustomException) {
      throw error;
    } else {
      throw new DowloadException(`Error downloading image. ${error.message}`);
    }
  }
}
