import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

console.log(CreateLoginDto);

@Controller('login')
@ApiTags('用户登录')
@ApiResponse({
  status: 1000,
  description: '请求成功',
})
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  create(@Body() CreateLoginDto: CreateLoginDto) {
    return 1;
  }
}
