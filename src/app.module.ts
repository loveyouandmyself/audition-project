import { SupplierModule } from './supplier/supplier.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456.!',
      database: 'test',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    SupplierModule,
  ],
})
export class AppModule {}
