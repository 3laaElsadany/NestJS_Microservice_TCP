import { Entity, Column, PrimaryGeneratedColumn,OneToMany, JoinColumn } from 'typeorm';
import { Payment } from './Payment';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: true })
  displayName?: string;

  @OneToMany(() => Payment, (payment) => payment.user)
  @JoinColumn()
  payments: Payment[];
}
