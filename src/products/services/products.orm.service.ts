import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "../../commons/models/Product.entity";
import { FixedExpenseService } from "src/fixedExpense/services/fixedExpense.service";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly serviceFixedExpense: FixedExpenseService

  ) { }

  create(product: Product): Promise<Product> {
    const newProduct = this.productRepository.create(product);
    return this.productRepository.save(newProduct);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['bills', 'bills.material'] });
  }

  findOne(id: string): Promise<Product> {
    return this.productRepository.findOne({ where: { id }, relations: ['bills', 'bills.material'] });
  }

  async update(id: string, product: Product): Promise<Product> {
    await this.productRepository.update(id, product);
    return this.productRepository.findOne({ where: { id }, relations: ['bills', 'bills.material'] });
  }

  async remove(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }

  async calculateSellingPrice(productId: string): Promise<{
    gastos_de_luz: number;
    gastos_de_filamento: number;
    desgaste_de_la_impresora: number;
    margen_error: number;
    total: number;
  }> {
    const product = await this.productRepository.findOne({ where: { id: productId }, relations: ['bills', 'bills.material'] });
    const fixedExpense = (await this.serviceFixedExpense.findAll()).find((fixed, index) => {
      if (index === 0) {
        return fixed;
      }
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${productId} not found`);
    }

    const gastos_de_luz = ((fixedExpense.priceKwh * fixedExpense.consumeRealHour) / 1000) * product.bill.hours;
    const gastos_de_filamento = (product.bill.material.price * product.bill.grams) / 1000;
    const desgaste_de_la_impresora = (fixedExpense.machineWear / fixedExpense.spareParts) * product.bill.hours;
    const margen_error = fixedExpense.marginOfError * (gastos_de_luz + gastos_de_filamento + desgaste_de_la_impresora);

    const total = gastos_de_luz + gastos_de_filamento + desgaste_de_la_impresora + margen_error;

    return {
      gastos_de_luz,
      gastos_de_filamento,
      desgaste_de_la_impresora,
      margen_error,
      total
    };
  }
}