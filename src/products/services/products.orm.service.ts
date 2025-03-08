import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/commons/models/Product.entity';
import { Repository } from 'typeorm';
import { ProductsInfoOrmService } from './products-info.orm/products-info.orm.service'; // Importar el servicio existente
import { BillService } from 'src/bills/service/bills.service';

@Injectable()
export class ProductsOrmService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    private readonly productInfoService: ProductsInfoOrmService ,// Inyectar el servicio existente
    private readonly  billService:BillService
  ) {}

  async create(product: Product): Promise<Product> {
    // Crear ProductInfo si existe en los datos del producto
    const productInfo = product.productInfo ? await this.productInfoService.create(product.productInfo) : null;
    const billProduct = product.bill ? await this.billService.create(product.bill): null;

    // Crear el producto con el ProductInfo asociado
    const newProduct = this.productsRepository.create({
      ...product,
      productInfo: productInfo,
      bill:billProduct
    });

    return this.productsRepository.save(newProduct);
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }


  async findAllSuplement(): Promise<Product[]> {
    return await this.productsRepository.createQueryBuilder('product')
    .where('CAST(product.supplement AS UNSIGNED) = 1')
    .getMany();
  }

  async findOne(id: string): Promise<Product> {
    return this.productsRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
