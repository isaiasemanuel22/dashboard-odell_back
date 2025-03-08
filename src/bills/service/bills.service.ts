import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBillDTO } from 'src/commons/models/interfaces/Bill.dto';
import { Bill } from 'src/commons/models/Bill.entity';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill)
    private readonly billRepository: Repository<Bill>,
  ) {}

  async create(createBillDto: CreateBillDTO): Promise<Bill> {
    const bill = this.billRepository.create(createBillDto);
    return this.billRepository.save(bill);
  }

  async findAll(): Promise<Bill[]> {
    return this.billRepository.find({ relations: ['product', 'material'] });
  }

  async findOne(id: string): Promise<Bill> {
    return this.billRepository.findOne({ where: { id }, relations: ['product', 'material'] });
  }

  async update(id: string, updateBillDto: CreateBillDTO): Promise<Bill> {
    await this.billRepository.update(id, updateBillDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.billRepository.delete(id);
  }
}