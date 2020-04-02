import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IUsers } from './interfaces/users.interface';
import { Model } from 'mongoose';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(@InjectModel('users') private readonly usersModel: Model<IUsers>) {
    // this.users = [
    //   {
    //     userId: 1,
    //     username: 'john',
    //     password: 'changeme',
    //   },
    //   {
    //     userId: 2,
    //     username: 'chris',
    //     password: 'secret',
    //   },
    //   {
    //     userId: 3,
    //     username: 'maria',
    //     password: 'guess',
    //   },
    // ];
  }

  async create(createUsersDto: CreateUsersDto): Promise<IUsers> {
    const createUsers = new this.usersModel(createUsersDto);
    return createUsers.save();
  }

  async findAll(): Promise<IUsers[]> {
    return this.usersModel.find().exec();
  }

  async findOne(username: string): Promise<IUsers | undefined> {
    return this.usersModel.findOne({"username":username})
  }
}