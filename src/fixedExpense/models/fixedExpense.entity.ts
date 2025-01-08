import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FixedExpense {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  priceKwh: number;

  @Column()
  consumeRealHour: number;

  @Column()
  machineWear: number;

  @Column()
  spareParts: number;

  @Column()
  marginOfError: number;

  @Column()
  description:string;
}