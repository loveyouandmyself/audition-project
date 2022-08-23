import { SupplierController } from './controllers/supplier.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './entities/supplier.entity';
import { EvaluationEntity } from './entities/evaluation.entity';
import { SupplierService } from './services/supplier.service';
@Module({
    imports: [
        TypeOrmModule.forFeature([
            SupplierEntity, 
            EvaluationEntity,
        ]),
    ],
    controllers: [
        SupplierController,
    ],
    providers: [
        SupplierService,
    ],
})
export class SupplierModule { }
