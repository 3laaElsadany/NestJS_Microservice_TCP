import { Body, Controller, Inject, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/CreatePayment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) { }

  @Post()
  createPayment(@Body() data: CreatePaymentDto) {
    return this.paymentsService.createPayment(data);
  }
}
