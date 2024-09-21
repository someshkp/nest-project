import { Module } from '@nestjs/common';
import { CatergoriesService } from './catergories.service';
import { CatergoriesController } from './catergories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatergoryEntity } from './entities/catergory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatergoryEntity])],
  controllers: [CatergoriesController],
  providers: [CatergoriesService],
  exports: [CatergoriesService],
})
export class CatergoriesModule {}
