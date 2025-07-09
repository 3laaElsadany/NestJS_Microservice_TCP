import { User } from "./User";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('payments')
export class Payment {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'float' })
  amount: number;

  @ManyToOne(() => User, (user) => user.payments)
  user: User;
}