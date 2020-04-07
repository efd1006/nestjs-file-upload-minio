import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MinioClientModule } from './minio-client/minio-client.module';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [MinioClientModule, FileUploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
