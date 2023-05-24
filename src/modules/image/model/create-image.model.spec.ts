import { CreateImage } from './create-image.model';

describe('CreateImage', () => {
  it('should create an instance of CreateImage', () => {
    const createImage = new CreateImage();

    expect(createImage).toBeDefined();
    expect(createImage).toBeInstanceOf(CreateImage);
  });

  it('should have a valid image URL', () => {
    const createImage = new CreateImage();
    const imageUrl = 'https://example.com/image.jpg';
    createImage.image = imageUrl;

    expect(createImage.image).toBe(imageUrl);
  });

  it('should have a compress factor between 1 and 100', () => {
    const createImage = new CreateImage();
    const compressFactor = 50;
    createImage.compress = compressFactor;

    expect(createImage.compress).toBe(compressFactor);
  });
});
