import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from 'src/tcp-users-payments/tcp-users-payments';

@Module({

  imports: [User],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
