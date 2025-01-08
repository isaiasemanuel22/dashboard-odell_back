import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FixedExpense } from '../models/fixedExpense.entity';

@Injectable()
export class FixedExpenseService {
  constructor(
    @InjectRepository(FixedExpense)
    private readonly fixedExpenseRepository: Repository<FixedExpense>,
  ) {}

  create(fixedExpense: FixedExpense): Promise<FixedExpense> {
    const newFixedExpense = this.fixedExpenseRepository.create(fixedExpense);
    return this.fixedExpenseRepository.save(newFixedExpense);
  }

  findAll(): Promise<FixedExpense[]> {
    return this.fixedExpenseRepository.find();
  }

  findOne(id: string): Promise<FixedExpense> {
    return this.fixedExpenseRepository.findOneBy({ id });
  }

  async update(id: string, fixedExpense: FixedExpense): Promise<FixedExpense> {
    await this.fixedExpenseRepository.update(id, fixedExpense);
    return this.fixedExpenseRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.fixedExpenseRepository.delete(id);
  }
}
