import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Bill } from "./Bill.entity";
import { Color } from "./Color.entity";

@Entity()
export class TypeMaterial {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  kgMaterial: number;

  @ManyToMany(() => Bill, (bill) => bill.material)
  bills: Bill[];

  @ManyToMany(() => Color)
  colors: Color[];
}