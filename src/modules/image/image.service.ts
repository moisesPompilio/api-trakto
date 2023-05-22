import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateImageDto } from './dto/create-image.dto';
import { downloadImage } from 'src/shared/util/download-image.util';
import { compressAndResizeImage } from 'src/shared/util/compress-and-resize-Image.util';
import { PathsImages } from './dto/paths-images.dto';
import { imageConfigManager } from 'src/config/image/image-config-manager';
import { extratMetadata } from 'src/shared/util/extrat-metadata.util';
import { Image, ImageDocument } from './entities/image.entity';
import { excludeFile } from 'src/shared/util/exclude-file.util';

@Injectable()
export class ImageService {
  constructor(
    @InjectModel(Image.name) private readonly imageModel: Model<ImageDocument>,
  ) {}

  async save(createImageDto: CreateImageDto) {
    const imagesPaths = new PathsImages();
    try {
      await downloadImage(createImageDto.image, imagesPaths.imagePathOrigin);
      const metadata = await extratMetadata(imagesPaths.imagePathOrigin);
      await compressAndResizeImage(
        imagesPaths.imagePathOrigin,
        imageConfigManager.maxDimension() < metadata.width
          ? imageConfigManager.maxDimension()
          : metadata.width,
        imageConfigManager.maxDimension() < metadata.height
          ? imageConfigManager.maxDimension()
          : metadata.height,
        createImageDto.compress,
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
      excludeFile(imagesPaths.imagePathOrigin);
      excludeFile(imagesPaths.imagePathThumb);
      throw error;
    }
  }
}
