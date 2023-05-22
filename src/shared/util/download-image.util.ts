import axios from 'axios';
import * as fs from 'fs';

export async function downloadImage(
  url: string,
  filePath: string,
): Promise<void> {
  const response = await axios.get(url, { responseType: 'stream' });
  response.data.pipe(fs.createWriteStream(filePath));
  return new Promise<void>((resolve, reject) => {
    response.data.on('end', resolve);
    response.data.on('error', reject);
  });
}
