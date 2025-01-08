import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Product } from './Product.entity';
import { TypeMaterial } from './TypeMaterial.entity';


@Entity()
export class Bill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  hours: number;

  @Column()
  grams: number;

  @OneToOne(() => Product)
  @JoinColumn()
  product: Product;

  @ManyToOne(() => TypeMaterial, { cascade: true })
  @JoinColumn()
  material: TypeMaterial;
}