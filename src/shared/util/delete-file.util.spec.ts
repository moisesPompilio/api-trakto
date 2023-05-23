import * as fs from 'fs';
import { deleteFile } from './delete-file.util';
import { DeleteFileException } from '../exceptions/exclude-file.exception';

jest.mock('fs');

describe('deleteFile', () => {
  it('should delete the file correctly', async () => {
    const filePath = 'path/do/arquivo.txt';
    (fs.unlink as unknown as jest.Mock).mockImplementationOnce(
      (_path, callback) => {
        callback();
      },
    );

    await expect(deleteFile(filePath)).resolves.toBeUndefined();

    expect(fs.unlink).toHaveBeenCalledWith(filePath, expect.any(Function));
  });

  it('should throw a DeleteFileException exception on error', async () => {
    const filePath = 'path/do/arquivo.txt';
    const expectedError = new Error('Erro ao excluir o arquivo');

    (fs.unlink as unknown as jest.Mock).mockImplementationOnce(
      (_path, callback) => {
        callback(expectedError);
      },
    );

    await expect(deleteFile(filePath)).rejects.toBeInstanceOf(
      DeleteFileException,
    );
  });
});
