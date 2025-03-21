import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { BrandFilament } from "./BrandFilament.entity";
import { TypeMaterial } from "./TypeMaterial.entity";
import { Color } from "./Color.entity";

@Entity()
export class Filament {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  price: number;

  @Column()
  kgMaterial: number;

  @Column({default:0})
  stock:number
  
  @ManyToOne(() => BrandFilament,  {nullable:true , onDelete: 'SET NULL'})
  @JoinColumn({ name: 'brandFilamentId' })  
  brandFilament: BrandFilament;

  @ManyToOne(()=> TypeMaterial, {nullable:true , onDelete: 'SET NULL'})
  @JoinColumn({ name: 'typeMaterialId' })  
  typeMaterial: TypeMaterial;

  @ManyToOne(()=> Color, (color) => color.filament,{ nullable: true, onDelete: "SET NULL" })
  @JoinColumn({ name: 'colorId' , })  
  color: Color;

}
