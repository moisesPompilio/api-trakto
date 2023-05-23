import * as fs from 'fs';
import { DeleteFileException } from '../exceptions/exclude-file.exception';

export async function deleteFile(filePath: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    fs.unlink(filePath, (error) => {
      if (error) {
        reject(
          new DeleteFileException(
            `Error deleting ${filePath}. ${error.message}`,
          ),
        );
      } else {
        resolve();
      }
    });
  });
}
