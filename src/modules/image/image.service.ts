import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { downloadImage } from './util/downloadImage.util';
import { compressImage } from './util/compressImage.util';
import { resizeImage } from './util/resizeImage.util';

@Injectable()
export class ImageService {
  async save(createImageDto: CreateImageDto) {
    const imagePathOrigin = './images/original/iamgesteste.jpg';
    await downloadImage(createImageDto.image, imagePathOrigin);
    const imagePathThumb = './images/thumb/iamgesteste_thumb.jpg';
    const maxSize = 720;
    await resizeImage(imagePathOrigin, imagePathThumb, maxSize);
    await compressImage(imagePathThumb, createImageDto.compress);
    return createImageDto;
  }
}
