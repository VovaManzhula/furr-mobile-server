import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Auth } from '../entityes/auth.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  findAll(): Promise<Auth[]> {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Auth | undefined> {
    return this.authService.findOne(id);
  }

  @Post()
  create(@Body() authData: Partial<Auth>): Promise<Auth> {
    return this.authService.create(authData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() authData: Partial<Auth>): Promise<Auth | undefined> {
    return this.authService.update(id, authData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.authService.remove(id);
  }
}
