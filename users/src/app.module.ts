import { Module } from '@nestjs/common';
import { UsersMicrosrvicesModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User';
import { ConfigModule } from '@nestjs/config';
import { Payment } from './entities/Payment';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Payment],
      synchronize: process.env.DB_SYNC === 'true'
    }),
    UsersMicrosrvicesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }