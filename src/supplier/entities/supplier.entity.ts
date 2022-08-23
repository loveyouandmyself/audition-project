import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { EvaluationEntity } from './evaluation.entity';

@Entity('supplier')
export class SupplierEntity extends BaseEntity {
  @ApiProperty({ name: '编码', example: '100100A' })
  @Column({ name: 'code', type: 'varchar' })
  code: string;

  @ApiProperty({ name: '名称', example: '北京xxx科技有限公司' })
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @ApiProperty({ name: '评价结果', example: '良', nullable: true })
  @Column({ name: 'evaluation_result', type: 'varchar', nullable: true })
  evaluationResult: string;

  @ApiProperty({ type: () => EvaluationEntity, isArray: true })
  @OneToMany(() => EvaluationEntity, evaluation => evaluation.supplier)
  evaluations?: EvaluationEntity[];
}
