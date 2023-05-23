import * as fs from 'fs';
import { ExcludeFileException } from '../exceptions/exclude-file.exception';
import { error } from 'console';

export async function excludeFile(filePath: string): Promise<void> {
  fs.unlink(filePath, (err) => {
    if (err) {
      return new ExcludeFileException(
        `Error deleting ${filePath} . ${error.toString}`,
      );
    }
  });
}
