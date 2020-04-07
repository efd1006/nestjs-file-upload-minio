import { Test, TestingModule } from '@nestjs/testing';
import { MinioClientService } from './minio-client.service';

describe('MinioClientService', () => {
  let service: MinioClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinioClientService],
    }).compile();

    service = module.get<MinioClientService>(MinioClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
