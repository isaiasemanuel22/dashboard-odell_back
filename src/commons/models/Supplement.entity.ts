import { ProductInfo } from "./ProductsInfo.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";
import { GeneralProduct } from "./interfaces/Products.interface";


@Entity()
export class Supplement implements GeneralProduct
{
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;

    @OneToOne(() => ProductInfo)
    @JoinColumn()
    productInfo: ProductInfo;

    @Column()
    cost: number;

    @Column()
    cant: number;

    @Column()    
    porcentage:number;
  
    @Column()
    description: string;
  
    @ManyToMany(() => Product, (product) => product.supplements)
    products: Product[];

}