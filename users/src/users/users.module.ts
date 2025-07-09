import { Module } from "@nestjs/common";
import { UsersMicrosrvicesController } from "./users.controller";
import { UsersMicrosrvicesService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/User";
import { Payment } from "src/entities/Payment";

@Module({
  imports: [TypeOrmModule.forFeature([User, Payment])],
  controllers: [UsersMicrosrvicesController],
  providers: [UsersMicrosrvicesService],
  exports: []
})

export class UsersMicrosrvicesModule { }