import { Module } from '@nestjs/common';
import { PaymentsMicrosrvicesService } from './payments.service';
import { PaymentsMicrosrvicesController } from './payments.controller';
import { User_TCP } from 'src/tcp-users/tcp-users';
import { Payment } from 'src/entities/Payment';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, User]), User_TCP],
  controllers: [PaymentsMicrosrvicesController],
  providers: [PaymentsMicrosrvicesService],
})
export class PaymentsModule { }
