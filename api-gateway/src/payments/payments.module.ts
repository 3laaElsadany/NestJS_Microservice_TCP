import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { Payment } from 'src/tcp-users-payments/tcp-users-payments';

@Module({
  imports: [Payment],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule { }
