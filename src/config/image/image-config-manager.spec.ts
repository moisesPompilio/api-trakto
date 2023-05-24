import { imageConfigManager } from './image-config-manager';

describe('imageConfigManager', () => {
  it('should have a rootDirectory property', () => {
    expect(imageConfigManager.rootDirectory).toBeDefined();
    expect(typeof imageConfigManager.rootDirectory).toBe('function');
    expect(imageConfigManager.rootDirectory()).toEqual('./images');
  });

  it('should have an originalDirectory property', () => {
    expect(imageConfigManager.originalDirectory).toBeDefined();
    expect(typeof imageConfigManager.originalDirectory).toBe('function');
    expect(imageConfigManager.originalDirectory()).toEqual('./images/original');
  });

  it('should have a thumbnailDirectory property', () => {
    expect(imageConfigManager.thumbnailDirectory).toBeDefined();
    expect(typeof imageConfigManager.thumbnailDirectory).toBe('function');
    expect(imageConfigManager.thumbnailDirectory()).toEqual('./images/thumb');
  });

  it('should have a maxDimension property', () => {
    expect(imageConfigManager.maxDimension).toBeDefined();
    expect(typeof imageConfigManager.maxDimension).toBe('function');
    expect(imageConfigManager.maxDimension()).toEqual(720);
  });
});
