import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { GeneralProduct } from "./interfaces/Products.interface";
import { Bill } from "./Bill.entity";
import { ProductInfo } from "./ProductsInfo.entity";

@Entity()
export class Product implements GeneralProduct {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cant: number;

  @Column()
  cost: number;

  @Column()
  price: number;

  @Column("simple-array", { nullable: true })
  photos: string[];

  @OneToOne(() => ProductInfo)
  @JoinColumn()
  productInfo: ProductInfo;

  @OneToOne(() => Bill)
  @JoinColumn()
  bill: Bill;

  @Column({ type: 'boolean', default: false })
  supplement: boolean;

  @Column({ type: 'boolean', default: false })
  product: boolean;

  @ManyToMany(() => Product, { cascade: true })
  @JoinTable()
  products: Product[];
}