import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Filament } from "./Filament.entity";

@Entity()
export class BrandFilament{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable:false})
  name:string;

  @OneToMany(() => Filament, (Filament) => Filament.brandFilament)
  filaments: Filament[];

}