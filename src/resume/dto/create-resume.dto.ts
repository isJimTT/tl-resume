import { ApiProperty } from '@nestjs/swagger';

export class CreateResumeDto {
  @ApiProperty({ description: '简历id', example: 12 })
  id: number;
  @ApiProperty({ description: '简历标题', example: '这是一个标题' })
  title: string;
  @ApiProperty({ description: '简历摘要', example: '这是一个摘要' })
  desc: string;
  @ApiProperty({ description: 'pdf', example: 'xxx' })
  pdf: string;
  @ApiProperty({ description: '发布者用户名', example: 'jim' })
  name: string;
  @ApiProperty({ description: '发布者头像', example: 'xxx' })
  cover: string;
}
