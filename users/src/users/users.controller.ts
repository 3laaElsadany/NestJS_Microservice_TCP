import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UsersMicrosrvicesService } from './users.service';

@Controller()
export class UsersMicrosrvicesController {

  constructor(private usersMicrosrvicesService: UsersMicrosrvicesService) { }

  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    return this.usersMicrosrvicesService.createUser(data);
  }

  @MessagePattern({ cmd: 'getUserById' })
  async getUserByIdr(@Payload() id: string) {
    return await this.usersMicrosrvicesService.getUserById(id);
  }

  @EventPattern('paymentCreated')
  paymentCreated(@Payload() data: any) {
    console.log(data);
  }
}