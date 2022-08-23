import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { SupplierEntity } from './supplier.entity';

@Entity('evaluation')
export class EvaluationEntity extends BaseEntity {
  @ApiProperty({ name: '分数', example: 80 })
  @Column({ name: 'score', type: 'int' })
  score: number;

  @ApiProperty({ name: '评价', example: '商品质量较好', nullable: true })
  @Column({ name: 'remark', type: 'text', nullable: true })
  remark: string;

  @ManyToOne(() => SupplierEntity, { cascade: true })
  supplier: SupplierEntity;
}
