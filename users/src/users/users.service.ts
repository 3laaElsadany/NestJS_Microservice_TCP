import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { Repository } from 'typeorm';
import { User } from 'src/entities/User';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersMicrosrvicesService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  createUser(data: CreateUserDto) {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  async getUserById(id: string) {
    return await this.userRepository.findOne({ where: { id }, relations: { payments: true } });
  }

}
