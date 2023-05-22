export const imageConfigManager = (function () {
  const rootDirectory = './images';
  const originalDirectory = './images/original';
  const thumbnailDirectory = './images/thumb';
  const maxDimension = 720;
  return {
    rootDirectory() {
      return rootDirectory;
    },
    originalDirectory() {
      return originalDirectory;
    },
    thumbnailDirectory() {
      return thumbnailDirectory;
    },
    maxDimension() {
      return maxDimension;
    },
  };
})();
