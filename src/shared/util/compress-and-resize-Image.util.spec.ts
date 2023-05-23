import * as sharp from 'sharp';
import { compressAndResizeImage } from './compress-and-resize-Image.util';

jest.mock('sharp', () => {
  const mockSharp = jest.fn(() => mockSharpInstance);
  const mockSharpInstance = {
    __esModule: true,
    default: jest.fn(),
    resize: jest.fn().mockReturnThis(),
    jpeg: jest.fn().mockReturnThis(),
    toFile: jest
      .fn()
      .mockImplementation((path: string) => Promise.resolve({ path })),
  };

  return mockSharp;
});

describe('compressAndResizeImage', () => {
  const originalImagePath = 'original/image.jpg';
  const widthDimension = 800;
  const heightDimension = 600;
  const compressionFactor = 80;
  const newImagePath = 'new/image.jpg';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call sharp with the correct parameters', async () => {
    await compressAndResizeImage(
      originalImagePath,
      widthDimension,
      heightDimension,
      compressionFactor,
      newImagePath,
    );

    expect(sharp).toHaveBeenCalledTimes(1);
    expect(sharp).toHaveBeenCalledWith(originalImagePath);
    expect(sharp().resize).toHaveBeenCalledTimes(1);
    expect(sharp().resize).toHaveBeenCalledWith(
      widthDimension,
      heightDimension,
      { fit: 'inside' },
    );
    expect(sharp().jpeg).toHaveBeenCalledTimes(1);
    expect(sharp().jpeg).toHaveBeenCalledWith({ quality: compressionFactor });
    expect(sharp().toFile).toHaveBeenCalledTimes(1);
    expect(sharp().toFile).toHaveBeenCalledWith(newImagePath);
  });

  it('should throw an exception if sharp throws an error', async () => {
    const error = new Error('Mocked sharp error');
    (sharp as unknown as jest.Mock).mockImplementationOnce(() => ({
      ...sharp(),
      toFile: jest.fn().mockImplementationOnce(() => Promise.reject(error)),
    }));

    await expect(
      compressAndResizeImage(
        originalImagePath,
        widthDimension,
        heightDimension,
        compressionFactor,
        newImagePath,
      ),
    ).rejects.toThrowError('Mocked sharp error');
  });
});
