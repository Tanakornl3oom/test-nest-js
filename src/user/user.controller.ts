import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser, User } from '../model/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async postHello(@Body() createUser: CreateUser): Promise<User> {
    const dto: CreateUser = this.userService.createUserDto(createUser);
    return await this.userService.create(dto);
  }
}
