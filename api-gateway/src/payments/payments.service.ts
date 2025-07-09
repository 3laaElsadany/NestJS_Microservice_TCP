import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PaymentsService {
  constructor(@Inject('PAYMENT_SERVICE') private client: ClientProxy) { }

  createPayment(data) {
    return this.client.emit('createPayment', data)

  }
}
