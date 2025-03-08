import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { BrandFilament } from "./BrandFilament.entity";
import { TypeMaterial } from "./TypeMaterial.entity";

@Entity()
export class Filament {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  price: number;

  @Column()
  kgMaterial: number;
  
  @ManyToOne(() => BrandFilament, { nullable: false })
  brandFilament: BrandFilament;

  @ManyToOne(()=> TypeMaterial, {nullable:false})
  typeMaterial: TypeMaterial;

}