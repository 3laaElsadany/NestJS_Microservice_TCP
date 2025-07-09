import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {

  constructor(@Inject('USER_SERVICE') private client: ClientProxy) { }

  createUser(data) {

    return this.client.send({ cmd: 'createUser' }, data)
  }

  async getUserById(id) {
    const user =  await firstValueFrom(this.client.send({ cmd: 'getUserById' }, id));


    if (!user) {
      throw new NotFoundException('User not found')
    }

    return user;

  }
}
