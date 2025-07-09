import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from 'src/entities/Payment';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/CreatePayment.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PaymentsMicrosrvicesService {

  constructor(@Inject('USER_SERVICE') private client: ClientProxy,
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>
  ) { }

  async createPayment(data: CreatePaymentDto) {
    const user = await firstValueFrom(this.client.send({ cmd: 'getUserById' }, data.userId));
    if (user) {
      const payment = this.paymentRepository.create({ amount: data.amount, user });
      return this.paymentRepository.save(payment);
    }
    return null;

  }
}
