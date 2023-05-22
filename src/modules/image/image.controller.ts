import { Controller, Post, Body } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Image } from './entities/image.entity';

@ApiTags('image')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @ApiOperation({
    summary:
      'Salvar imagem e salvar copia da imagem com redimesionamento dela de maneira correta e compactar conforme os dados passado',
  })
  @ApiResponse({
    status: 201,
    description:
      'Salvar imagem correto e retorna dos paths das imagens e metadata da imagem original',
    type: Image,
  })
  @ApiResponse({
    status: 500,
    description: 'erro interno ao fazer a operação',
  })
  @Post()
  save(@Body() createImageDto: CreateImageDto) {
    return this.imageService.save(createImageDto);
  }
}
