import { ClientsModule, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config();


export const User_TCP = ClientsModule.register([
  {
    name: 'USER_SERVICE',
    transport: Transport.TCP,
    options: {
      host: process.env.HOST_USER_TCP,
      port: + process.env.PORT_USER_TCP,
    }
  },
])
