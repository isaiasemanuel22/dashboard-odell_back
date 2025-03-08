import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm";
import { Bill } from "./Bill.entity";
import { Filament } from "./Filament.entity";

@Entity()
export class TypeMaterial {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({default:0})
  price: number;

  @ManyToMany(() => Bill, (bill) => bill.material)
  bills: Bill[];

  @OneToMany(() => Filament, (filament) => filament.typeMaterial)
  filament: Filament[];

}