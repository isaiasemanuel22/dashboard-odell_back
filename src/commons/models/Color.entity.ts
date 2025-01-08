import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Color {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}