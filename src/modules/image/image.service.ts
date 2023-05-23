import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateImage } from './model/create-image.model';
import { downloadImage } from 'src/shared/util/download-image.util';
import { compressAndResizeImage } from 'src/shared/util/compress-and-resize-Image.util';
import { PathsImages } from './model/paths-images.model';
import { imageConfigManager } from 'src/config/image/image-config-manager';
import { extractMetadata } from 'src/shared/util/extrat-metadata.util';
import { Image, ImageDocument } from './schema/image.schema';
import { deleteFile } from 'src/shared/util/delete-file.util';

@Injectable()
export class ImageService {
  constructor(
    @InjectModel(Image.name) private readonly imageModel: Model<ImageDocument>,
  ) {}

  async save(createImageModel: CreateImage) {
    const imagesPaths = new PathsImages();
    try {
      await downloadImage(createImageModel.image, imagesPaths.imagePathOrigin);
      const metadata = await extractMetadata(imagesPaths.imagePathOrigin);
      await compressAndResizeImage(
        imagesPaths.imagePathOrigin,
        imageConfigManager.maxDimension() < metadata.width
          ? imageConfigManager.maxDimension()
          : metadata.width,
        imageConfigManager.maxDimension() < metadata.height
          ? imageConfigManager.maxDimension()
          : metadata.height,
        createImageModel.compress,
        imagesPaths.imagePathThumb,
      );
      const output: Image = {
        localpath: {
          original: imagesPaths.imagePathOrigin,
          thumb: imagesPaths.imagePathThumb,
        },
        metadata,
      };
      const createImage = new this.imageModel(output);
      await createImage.save();
      return createImage;
    } catch (error) {
      deleteFile(imagesPaths.imagePathOrigin);
      deleteFile(imagesPaths.imagePathThumb);
      throw error;
    }
  }
}
