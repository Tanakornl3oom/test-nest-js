import { IsString, IsInt, IsMongoId } from 'class-validator';

interface IUser {
  id: number;
  name: string;
  age: number;
}

interface ICreateUser {
  name: string;
  age: number;
}

export class CreateUser implements ICreateUser {
  @IsString() name: string;
  @IsInt() age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class User implements IUser {
  @IsMongoId() id: number;
  @IsString() name: string;
  @IsInt() age: number;
}
