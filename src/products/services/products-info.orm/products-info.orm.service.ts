import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductInfo } from 'src/commons/models/ProductsInfo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsInfoOrmService {

    constructor(
        @InjectRepository(ProductInfo)
        private readonly productInfoRepository: Repository<ProductInfo>,
      ) {}
    
      // Crear una nueva información de producto
      async create(productInfoData: Partial<ProductInfo>): Promise<ProductInfo> {
        const productInfo = this.productInfoRepository.create(productInfoData);
        return this.productInfoRepository.save(productInfo);
      }
    
      // Obtener todas las informaciones de productos
      async findAll(): Promise<ProductInfo[]> {
        return this.productInfoRepository.find();
      }
    
      // Obtener una información de producto por su ID
      async findOne(id: string): Promise<ProductInfo> {
        return this.productInfoRepository.findOneBy({ id });
      }
    
      // Actualizar la información de un producto
      async update(id: string, productInfoData: Partial<ProductInfo>): Promise<ProductInfo> {
        const productInfo = await this.productInfoRepository.findOneBy({id});
        if (!productInfo) {
          throw new Error('Información del producto no encontrada');
        }
    
        Object.assign(productInfo, productInfoData);
        return this.productInfoRepository.save(productInfo);
      }
    
      // Eliminar la información de un producto
      async remove(id: string): Promise<void> {
        await this.productInfoRepository.delete(id);
      }

}
