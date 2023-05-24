import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { ImageService } from './image.service';

describe('ImageController (e2e)', () => {
  let app: INestApplication;
  let imageService: ImageService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    imageService = moduleFixture.get<ImageService>(ImageService);

    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should save image', async () => {
    const createImageDto = {
      image: 'https://example.com/image.jpg',
      compress: 15,
    };

    jest.spyOn(imageService, 'save').mockResolvedValue({} as any);

    const response = await request(app.getHttpServer())
      .post('/image')
      .send(createImageDto)
      .expect(201);

    expect(response.body).toBeDefined();
  });
});
