import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Config {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({default:0})
  price_kwh:number;

  @Column({default:0})
  consume_x_hour:number;

  @Column({default:0})
  wear_machine:number;

  @Column({default:0})
  price_replacement:number;

  @Column({default:0})
  margin_error:number;

  @Column({default:''})
  type:string;
}