import { ApiProperty } from '@nestjs/swagger';

export class CreateCommandDto {
  @ApiProperty({ description: '简历id', example: 12 })
  resume_id: number;
  @ApiProperty({ description: '评论内容', example: '这是一条评论' })
  content: string;
  @ApiProperty({ description: '评论者用户名', example: 'jim' })
  name: string;
  @ApiProperty({ description: '评论者头像', example: 'xxx' })
  cover: string;
  @ApiProperty({ description: '父评论Id', example: 22 })
  parent_id: number;
}
