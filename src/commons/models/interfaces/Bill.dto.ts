import { Product } from "../Product.entity";
import { TypeMaterial } from "../TypeMaterial.entity";

export interface CreateBillDTO {
  hours: number;
  grams: number;
  product: Product;
  material: TypeMaterial;
}