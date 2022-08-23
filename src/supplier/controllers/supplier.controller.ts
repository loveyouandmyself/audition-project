import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { SupplierInsertDto } from '../dto/supplier-insert.dto';
import { SupplierEntity } from '../entities/supplier.entity';
import { SupplierService } from '../services/supplier.service';

@Controller('supplier')
export class SupplierController {
  constructor(private supplierService: SupplierService) {}

  @Get('getAll')
  @ApiCreatedResponse({
    description: 'The record has been successfully query.',
    type: SupplierEntity,
    isArray: true,
  })
  public async querySuppliers(): Promise<SupplierEntity[]>{
    return this.supplierService.querySuppliers();
  }

  @Post('insert')
  @ApiCreatedResponse({
    description: 'The record has been successfully query.',
    type: SupplierEntity,
  })
  public async insertSupplier(@Body() args: SupplierInsertDto): Promise<SupplierEntity> {
    return this.supplierService.insertSupplier(args);
  }
}
