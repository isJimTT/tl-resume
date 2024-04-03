import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { ApiTags, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('resume')
@ApiTags('简历管理')
@ApiResponse({ status: 1000, description: '请求成功' })
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post()
  create(@Body() createResumeDto: CreateResumeDto) {
    return this.resumeService.create(createResumeDto);
  }

  @Get()
  @ApiQuery({ name: 'keyword', description: '搜索关键字' })
  findAll() {
    return this.resumeService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: '简历id', required: true })
  findOne(@Param('id') id: string) {
    return this.resumeService.findOne(+id);
  }

  @Patch(':id')
  update(@Body() updateResumeDto: UpdateResumeDto) {
    return this.resumeService.update(1, updateResumeDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: '简历id', required: true })
  remove(@Param('id') id: string) {
    return this.resumeService.remove(+id);
  }
}
