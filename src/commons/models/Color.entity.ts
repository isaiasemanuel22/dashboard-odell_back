import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Filament } from "./Filament.entity";

@Entity()
export class Color {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(()=> Filament, (filament) => filament.color)
  filament: Filament[];
}
