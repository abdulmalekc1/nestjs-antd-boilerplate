import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { CategoryController } from './controller/categories.controller';
import { CategoryCrudService } from './services/category-crud.service';
import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, User])],
  providers: [CategoryCrudService],
  controllers: [CategoryController],
})
export class CategoryModule {}
