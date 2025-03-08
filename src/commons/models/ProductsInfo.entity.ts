import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({default:''})
  description: string;

  @Column({ type: "json", nullable: true })
  colorsAvailability: string[];
  

}