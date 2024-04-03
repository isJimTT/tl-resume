import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CommandService } from './command.service';
import { CreateCommandDto } from './dto/create-command.dto';
import { ApiTags, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('command')
@ApiTags('评论管理')
@ApiParam({ name: 'id', description: '评论id', required: true })
@ApiParam({ name: 'id', description: '评论id', required: true })
export class CommandController {
  constructor(private readonly commandService: CommandService) {}

  @Post()
  create(@Body() createCommandDto: CreateCommandDto) {
    return this.commandService.create(createCommandDto);
  }

  @Get()
  @ApiQuery({ name: 'keyword', description: '搜索关键字' })
  findAll() {
    return this.commandService.findAll();
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: '评论id', required: true })
  remove(@Param('id') id: string) {
    return this.commandService.remove(+id);
  }
}
