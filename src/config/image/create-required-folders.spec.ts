import * as fs from 'fs';
import { createRequiredFolders } from './create-required-folders';
import { imageConfigManager } from './image-config-manager';

jest.mock('fs');

describe('createRequiredFolders', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create the root directory if it does not exist', () => {
    (fs.existsSync as jest.Mock).mockReturnValue(false);
    const mkdirMock = jest.spyOn(fs, 'mkdir');

    createRequiredFolders();

    expect(fs.existsSync).toHaveBeenCalledWith(
      imageConfigManager.rootDirectory(),
    );
    expect(mkdirMock).toHaveBeenCalledWith(
      imageConfigManager.rootDirectory(),
      expect.any(Function),
    );
  });

  it('should not create the root directory if it already exists', () => {
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    const mkdirMock = jest.spyOn(fs, 'mkdir');

    createRequiredFolders();

    expect(fs.existsSync).toHaveBeenCalledWith(
      imageConfigManager.rootDirectory(),
    );
    expect(mkdirMock).not.toHaveBeenCalled();
  });

  it('should create the original directory if it does not exist', () => {
    (fs.existsSync as jest.Mock).mockReturnValue(false);
    const mkdirMock = jest.spyOn(fs, 'mkdir');

    createRequiredFolders();

    expect(fs.existsSync).toHaveBeenCalledWith(
      imageConfigManager.originalDirectory(),
    );
    expect(mkdirMock).toHaveBeenCalledWith(
      imageConfigManager.originalDirectory(),
      expect.any(Function),
    );
  });

  it('should not create the original directory if it already exists', () => {
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    const mkdirMock = jest.spyOn(fs, 'mkdir');

    createRequiredFolders();

    expect(fs.existsSync).toHaveBeenCalledWith(
      imageConfigManager.originalDirectory(),
    );
    expect(mkdirMock).not.toHaveBeenCalled();
  });

  it('should create the thumbnail directory if it does not exist', () => {
    (fs.existsSync as jest.Mock).mockReturnValue(false);
    const mkdirMock = jest.spyOn(fs, 'mkdir');

    createRequiredFolders();

    expect(fs.existsSync).toHaveBeenCalledWith(
      imageConfigManager.thumbnailDirectory(),
    );
    expect(mkdirMock).toHaveBeenCalledWith(
      imageConfigManager.thumbnailDirectory(),
      expect.any(Function),
    );
  });

  it('should not create the thumbnail directory if it already exists', () => {
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    const mkdirMock = jest.spyOn(fs, 'mkdir');

    createRequiredFolders();

    expect(fs.existsSync).toHaveBeenCalledWith(
      imageConfigManager.thumbnailDirectory(),
    );
    expect(mkdirMock).not.toHaveBeenCalled();
  });
});
