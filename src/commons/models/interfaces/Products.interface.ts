import { ProductInfo } from "../ProductsInfo.entity";

export interface GeneralProduct {
        id:string
        name: string;
        cant: number;
        productInfo: ProductInfo;
        cost: number;
}