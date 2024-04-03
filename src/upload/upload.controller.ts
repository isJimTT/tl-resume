import { Controller, Post, Body } from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { ApiTags } from '@nestjs/swagger';

console.log(CreateUploadDto);

@Controller('upload')
@ApiTags('文件(头像)上传')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post()
  create(@Body() CreateUploadDto: CreateUploadDto) {
    return 1;
  }
}
