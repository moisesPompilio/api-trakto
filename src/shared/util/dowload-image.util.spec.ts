import axios from 'axios';
import * as fs from 'fs';
import { downloadImage } from './download-image.util';

jest.mock('axios');
jest.mock('fs');

describe('downloadImage', () => {
  const url = 'https://example.com/image.jpg';
  const filePath = '/path/to/save/image.jpg';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should download and save the image', async () => {
    const stream = { pipe: jest.fn(), on: jest.fn() };
    const response = {
      headers: { 'content-type': 'image/jpeg' },
      data: stream,
    };
    (axios.get as jest.Mock).mockResolvedValue(response);
    (fs.createWriteStream as jest.Mock).mockReturnValue(stream);

    let resolveCallback: () => void;
    const promise = new Promise<void>((resolve) => {
      resolveCallback = resolve;
    });

    (stream.on as jest.Mock).mockImplementation(
      (event: string, callback: () => void) => {
        if (event === 'end') {
          resolveCallback();
        }
        if (event === 'error') {
          throw new Error('Simulated error');
        }
        callback();
      },
    );

    await expect(downloadImage(url, filePath)).resolves.toBeUndefined();

    expect(axios.get).toHaveBeenCalledWith(url, { responseType: 'stream' });
    expect(fs.createWriteStream).toHaveBeenCalledWith(filePath);
    expect(stream.pipe).toHaveBeenCalledWith(fs.createWriteStream(filePath));
    expect(stream.on).toHaveBeenCalledWith('end', expect.any(Function));
    expect(stream.on).toHaveBeenCalledWith('error', expect.any(Function));

    return promise;
  });

  it('should throw an exception when the image download fails', async () => {
    const mockError = new Error('Failed to download image');
    (axios.get as jest.Mock).mockRejectedValue(mockError);

    await expect(downloadImage(url, filePath)).rejects.toThrow(
      `Error downloading image. ${mockError.message}`,
    );
  });

  it('should throw an exception for unsupported image types', async () => {
    const mockResponse = {
      headers: {
        'content-type': 'text/plain',
      },
    };
    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    await expect(downloadImage(url, filePath)).rejects.toThrow(
      'Error downloading image. unsupported image',
    );
  });
});
