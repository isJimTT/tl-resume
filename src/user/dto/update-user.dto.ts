import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ description: '用户id', example: 13 })
  id: number;
  @ApiProperty({ description: '用户名', example: 'jim' })
  name: string;
  @ApiProperty({ description: '密码', example: '12345678' })
  passWord: string;
  @ApiProperty({ description: '头像', example: 'xxx' })
  cover: string;
  @ApiProperty({ description: '电话号码', example: '1888888888' })
  phoneNumber: number;
}
