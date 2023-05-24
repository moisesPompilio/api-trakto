import { imageConfigManager } from '../../../config/image/image-config-manager';
import { v4 as uuidv4 } from 'uuid';

export class PathsImages {
  private _imagePathOriginal: string;
  private _imagePathThumb: string;
  constructor() {
    const uniqueName = uuidv4();
    this._imagePathOriginal = `${imageConfigManager.originalDirectory()}/${uniqueName}.jpg`;
    this._imagePathThumb = `${imageConfigManager.thumbnailDirectory()}/${uniqueName}_thumb.jpg`;
  }
  public get imagePathOrigin(): string {
    return this._imagePathOriginal;
  }
  public get imagePathThumb(): string {
    return this._imagePathThumb;
  }
}
