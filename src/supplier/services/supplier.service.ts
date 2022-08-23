import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sum } from 'lodash';
import { DataSource, Repository } from 'typeorm';
import { SupplierInsertDto } from '../dto/supplier-insert.dto';
import { EvaluationEntity } from '../entities/evaluation.entity';
import { SupplierEntity } from '../entities/supplier.entity';

@Injectable()
export class SupplierService {

  constructor(
    @InjectRepository(SupplierEntity)
    private supplierRepository: Repository<SupplierEntity>,
    private dataSource: DataSource
  ){
  }
  
  public async querySuppliers(): Promise<SupplierEntity[]>{
    const [result] = await this.supplierRepository.findAndCount({
      relations: ['evaluations'],
    });
    
    return result;
  }

  public async insertSupplier(args: SupplierInsertDto): Promise<SupplierEntity> {
    const {
      id,
      score,
      remark,
    } = args;
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const supplier = await this.supplierRepository.findOne({
        where: {
          id,
        },
        relations: ['evaluations'],
      });
      if (!supplier) {
        throw new HttpException(`${id}供应商不存在`, 400);
      }
      const insertEvaluations = [{
        id: null,
        score,
        remark,
        supplier,
      }];
      await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(EvaluationEntity)
      .values(insertEvaluations)
      .execute();
      const scores = supplier.evaluations.map(evaluation => evaluation.score);
      scores.push(score);
      const average = sum(scores)/scores.length;
      let evaluationResult = '';
      if (average >=90) {
        evaluationResult = '优';
      } else if (average >= 80 && average < 90) {
        evaluationResult = '良';
      } else if (average >= 60 && average < 80) {
        evaluationResult = '合格';
      } else {
        evaluationResult = '不合格';
      }

      await queryRunner.manager.update(SupplierEntity, id, {
        evaluationResult,
      });
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    }
    const evaluation =  await this.supplierRepository.findOne({
      where: {
        id,
      },
      relations: ['evaluations'],
    });
    return evaluation;
  }
}
