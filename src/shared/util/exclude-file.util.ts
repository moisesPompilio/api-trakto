import * as fs from 'fs';

export async function excludeFile(filePath: string): Promise<void> {
  fs.unlink(filePath, (err) => {
    if (err) {
      return err;
    }
  });
}
