import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Supplement } from "./Supplement.entity";
import { GeneralProduct } from "./interfaces/Products.interface";
import { Bill } from "./Bill.entity";
import { ProductInfo } from "./ProductsInfo.entity";

@Entity()
export class Product implements GeneralProduct{

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
  
    @ManyToMany(() => Supplement, (supplement) => supplement.products)
    @JoinTable()
    supplements: Supplement[];

}
