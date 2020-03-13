import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, CreateUser } from '../model/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUser: CreateUser): Promise<User> {
    const createdCat = new this.userModel(createUser);
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  getHello(): string {
    return 'Hello World!';
  }

  postHello(): string {
    return 'Hello World! post';
  }

  createUserDto(body: CreateUser): CreateUser {
    return new CreateUser(body.name, body.age);
  }
}
