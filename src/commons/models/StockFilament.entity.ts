import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Color } from "./Color.entity";
import { Filament } from "./Filament.entity";

@Entity()
export class StockFilament {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Filament, { nullable: false })
  @JoinColumn()
  filament: Filament;

  @OneToOne(() => Color, { nullable: false })
  @JoinColumn()
  color: Color;

  @Column({ default: 0, nullable: false })
  cant: number;
}