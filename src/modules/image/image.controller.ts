import { Controller, Post, Body } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  save(@Body() createImageDto: CreateImageDto) {
    return this.imageService.save(createImageDto);
  }
}
