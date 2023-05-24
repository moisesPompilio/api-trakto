import { Controller, Post, Body, UseFilters } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImage } from './model/create-image.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Image } from './schema/image.schema';
import { CustomExceptionFilter } from '../../shared/exceptions/custom-exception-filter.exception';
import { customTipeException } from '../../shared/exceptions/custom-type.exceptio';

@ApiTags('image')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @ApiOperation({
    summary:
      'Save image and save a copy of the image with correct resizing and compress according to the data passed',
  })
  @ApiResponse({
    status: 201,
    description:
      'Save image correct and return image paths and original image metadata',
    type: Image,
  })
  @ApiResponse({
    status: 500,
    description: 'internal error when doing the operation',
    type: customTipeException,
  })
  @ApiResponse({
    status: 400,
    description: 'request has an error',
    type: customTipeException,
  })
  @UseFilters(new CustomExceptionFilter())
  @Post()
  save(@Body() createImageDto: CreateImage) {
    return this.imageService.save(createImageDto);
  }
}
