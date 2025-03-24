import { Config } from "./config.entity";
import { Bill } from "./Bill.entity";
import { BrandFilament } from "./BrandFilament.entity";
import { Color } from "./Color.entity";
import { Filament } from "./Filament.entity";
import { FixedExpense } from "./fixedExpense.entity";
import { Product } from "./Product.entity";
import { ProductInfo } from "./ProductsInfo.entity";
import { StockFilament } from "./StockFilament.entity";
import { TypeMaterial } from "./TypeMaterial.entity";




export const entities = [
Bill,
BrandFilament,
Color,
Filament,
Product,
ProductInfo,
StockFilament,
TypeMaterial,
FixedExpense,
Config
]