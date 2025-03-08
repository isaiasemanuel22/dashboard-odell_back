
import { BillController } from "./controller/bills.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bill } from "src/commons/models/Bill.entity";
import { Module } from "@nestjs/common";
import { BillService } from "./service/bills.service";

@Module({
  imports: [TypeOrmModule.forFeature([Bill])],
  providers: [BillService],
  controllers: [BillController], // Agregar el controlador aquí
  exports: [BillService],

})
export class BillModule {}