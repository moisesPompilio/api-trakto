import { PathsImages } from './paths-images.model';
import { imageConfigManager } from '../../../config/image/image-config-manager';
import { v4 as uuidv4 } from 'uuid';

jest.mock('uuid');

describe('PathsImages', () => {
  let pathsImages: PathsImages;
  const mockUniqueId = 'mock-uuid';

  beforeEach(() => {
    jest
      .spyOn(imageConfigManager, 'originalDirectory')
      .mockReturnValue('./images/original');
    jest
      .spyOn(imageConfigManager, 'thumbnailDirectory')
      .mockReturnValue('./images/thumb');
    (uuidv4 as jest.Mock).mockReturnValue(mockUniqueId);
    pathsImages = new PathsImages();
  });

  it('should create an instance of PathsImages', () => {
    expect(pathsImages).toBeDefined();
    expect(pathsImages).toBeInstanceOf(PathsImages);
  });

  it('should set the correct image paths on construction', () => {
    const expectedImagePathOriginal = `./images/original/${mockUniqueId}.jpg`;
    const expectedImagePathThumb = `./images/thumb/${mockUniqueId}_thumb.jpg`;

    expect(pathsImages.imagePathOrigin).toBe(expectedImagePathOriginal);
    expect(pathsImages.imagePathThumb).toBe(expectedImagePathThumb);
  });
});
