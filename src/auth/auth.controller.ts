import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
  import { AuthGuard } from './auth.guard';
  import { AuthService } from './auth.service';
  import { Logger } from '@nestjs/common';

  @Controller('auth')
  export class AuthController {
    private readonly logger = new Logger('Auth');
    constructor(private authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
  
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      this.logger.log('get profile');
      return req.user;
    }

    @HttpCode(HttpStatus.OK)
    @Get('users')
    users() {
      return this.authService.users();
    }

}