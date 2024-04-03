import { Injectable } from '@nestjs/common';
import { CreateCommandDto } from './dto/create-command.dto';

console.log(CreateCommandDto);

@Injectable()
export class CommandService {
  create(createCommandDto: CreateCommandDto) {
    return 'This action adds a new command';
  }

  findAll() {
    return `This action returns all command`;
  }

  remove(id: number) {
    return `This action removes a #${id} command`;
  }
}
