import { ClientsModule, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config();


console.log('process.env.HOST_USER_TCP', process.env.HOST_USER_TCP)
console.log('process.env.PORT_USER_TCP', process.env.PORT_USER_TCP)

export const User = ClientsModule.register([
  {
    name: 'USER_SERVICE',
    transport: Transport.TCP,
    options: {
      host: process.env.HOST_USER_TCP,
      port: +process.env.PORT_USER_TCP,
    }
  },
])

export const Payment = ClientsModule.register([
  {
    name: 'PAYMENT_SERVICE',
    transport: Transport.TCP,
    options: {
      host: process.env.HOST_PAYMENT_TCP,
      port: +process.env.PORT_PAYMENT_TCP,
    }
  },
])
