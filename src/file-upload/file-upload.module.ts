import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { MinioClientModule } from 'src/minio-client/minio-client.module';

@Module({
  imports: [
    MinioClientModule
  ],
  providers: [FileUploadService],
  controllers: [FileUploadController]
})
export class FileUploadModule {}
