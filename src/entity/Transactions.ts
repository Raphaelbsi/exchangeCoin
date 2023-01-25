import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Double,
  CreateDateColumn
} from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  originCoin: string;

  @Column({ type: 'double' })
  originValue: number;

  @Column()
  destinyCoin: string;

  @Column({ type: 'double' })
  destinyValue: number;

  @Column({ type: 'double' })
  conversionRate: number;

  @CreateDateColumn({ type: 'datetime' })
  created_at: Date;
}
