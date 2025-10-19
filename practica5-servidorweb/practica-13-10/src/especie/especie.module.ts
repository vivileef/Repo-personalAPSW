import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspecieService } from './especie.service';
import { EspecieController } from './especie.controller';
import { Especie } from './entities/especie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Especie])],
  controllers: [EspecieController],
  providers: [EspecieService],
  exports: [EspecieService],
})
export class EspecieModule {}
