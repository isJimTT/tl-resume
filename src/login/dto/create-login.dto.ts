import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginDto {
  @ApiProperty({ description: '用户名', example: 12 })
  name: string;
  @ApiProperty({ description: '密码', example: 'xxxxxxxx' })
  passWords: string;
}
