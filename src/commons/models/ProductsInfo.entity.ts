import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column("simple-array")
  colorsAvailability: string[];

}