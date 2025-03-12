import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FixedExpenseService } from './services/fixedExpense.service';
import { FixedExpense } from '../commons/models/fixedExpense.entity';
import { FixedExpenseController } from './controllers/fixedExpense.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FixedExpense])],
  controllers: [FixedExpenseController],
  providers: [FixedExpenseService],
  exports:[FixedExpenseService]
})
export class FixedExpenseModule {}