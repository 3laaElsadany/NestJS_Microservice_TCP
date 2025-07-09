import { Controller, Inject } from '@nestjs/common';
import { PaymentsMicrosrvicesService } from './payments.service';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dto/CreatePayment.dto';

@Controller('payments')
export class PaymentsMicrosrvicesController {
  constructor(private readonly paymentsService: PaymentsMicrosrvicesService, @Inject('USER_SERVICE') private client: ClientProxy) { }

  @EventPattern('createPayment')
  async createPayment(@Payload() data: CreatePaymentDto) {
    const payment = await this.paymentsService.createPayment(data);
    if (payment) this.client.emit('paymentCreated', payment)
  }
}
