import * as sharp from 'sharp';
import { extractMetadata } from './extrat-metadata.util';
import { ExtractMetadataException } from '../exceptions/extrat-metadata.exception';

describe('extractMetadata', () => {
  it('should return the metadata of the image', async () => {
    const path = 'path/to/image.jpg';
    const expectedMetadata = { width: 800, height: 600 };

    jest.spyOn(sharp.prototype, 'metadata').mockResolvedValue(expectedMetadata);

    const metadata = await extractMetadata(path);

    expect(metadata).toEqual(expectedMetadata);
    expect(sharp.prototype.metadata).toHaveBeenCalledWith();

    jest.spyOn(sharp.prototype, 'metadata').mockRestore();
  });

  it('should throw ExtractMetadataException if an error occurs', async () => {
    const path = 'path/to/image.jpg';
    const errorMessage = 'Failed to extract metadata';

    jest
      .spyOn(sharp.prototype, 'metadata')
      .mockRejectedValue(new Error(errorMessage));

    await expect(extractMetadata(path)).rejects.toThrowError(
      ExtractMetadataException,
    );

    jest.spyOn(sharp.prototype, 'metadata').mockRestore();
  });
});
