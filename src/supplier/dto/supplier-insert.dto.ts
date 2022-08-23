import { ApiProperty } from '@nestjs/swagger';

export class SupplierInsertDto{
  @ApiProperty({ description: '供应商Id', example: 1 })
  id: number;

  @ApiProperty({ description: '分数', example: 80 })
  score: number;

  @ApiProperty({ description: '评价', example: '商品质量较好' })
  remark: string;
}