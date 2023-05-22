import * as fs from 'fs';
import { error } from 'console';
import { imageConfigManager } from './image-config-manager';

export const createRequiredFolders = () => {
  if (NotExiterFolder(imageConfigManager.rootDirectory())) {
    fs.mkdir(imageConfigManager.rootDirectory(), error);
  }
  if (NotExiterFolder(imageConfigManager.originalDirectory())) {
    fs.mkdir(imageConfigManager.originalDirectory(), error);
  }
  if (NotExiterFolder(imageConfigManager.thumbnailDirectory())) {
    fs.mkdir(imageConfigManager.thumbnailDirectory(), error);
  }
};

function NotExiterFolder(path: string): boolean {
  return !fs.existsSync(path);
}
