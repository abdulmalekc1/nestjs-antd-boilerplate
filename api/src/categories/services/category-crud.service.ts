import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { toTypeormSortOrder } from '../../common/utils/common';
import { Repository } from 'typeorm';
import { GenericIDResponse } from '../../common/dtos/generic-id-response.dto';
import { CreateCategory } from '../dtos/create-category.dto';
import { ListCategoryRequest } from '../dtos/list-category-request.dto';
import { ListCategoryResponse } from '../dtos/list-category-response.dto';
import { UpdateCategory } from '../dtos/update-category.dto';
import { Category } from '../entities/category.entity';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class CategoryCrudService {
  constructor(
    @InjectRepository(Category)
    private readonly repo: Repository<Category>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async index(request: ListCategoryRequest) {
    console.log(
      '🚀 ~ file: category-crud.service.ts:28 ~ CategoryCrudService ~ index ~ request:',
      request,
    );
    const qb = this.repo
      .createQueryBuilder('category')
      .limit(request.limit)
      .offset(request.offset)
      .orderBy(
        `category.${request.sortField}`,
        toTypeormSortOrder(request.sortOrder),
      );

    if (request.id) {
      qb.andWhere('category.id = :id', {
        id: request.id,
      });
    }
    if (request.title) {
      qb.andWhere('category.title LIKE :title', {
        title: `%${request.title}%`,
      });
    }

    if (request.type) {
      qb.andWhere('category.type LIKE :type', {
        type: `%${request.type}%`,
      });
    }
    const [data, total] = await qb.getManyAndCount();

    return new ListCategoryResponse({
      data,
      total,
      success: true,
    });
  }

  async create(request: CreateCategory) {
    const user = await this.userRepo.findOneBy({ id: request.userId });
    if (!user) {
      throw new BadRequestException('invalid user');
    }

    delete request.userId;
    const category = this.toEntity(request);

    await this.repo.save(category);

    return new GenericIDResponse(category.id);
  }

  async update(id: string, request: UpdateCategory) {
    const category = await this.repo.findOneBy({ id });
    if (!category) {
      throw new NotFoundException('category not found');
    }

    const user = await this.userRepo.findOneBy({ id: request.userId });
    if (!user) {
      throw new BadRequestException('invalid user');
    }

    delete request.userId;
    const newCategory = this.toEntity(request);
    newCategory.id = category.id;
    newCategory.createdAt = category.createdAt;
    newCategory.updatedAt = category.updatedAt;

    await this.repo.save(newCategory);
  }

  async findById(id: string) {
    const category = await this.repo.findOne({
      where: { id },
    });
    if (!category) {
      throw new NotFoundException('category not found');
    }
    return category;
  }

  private toEntity(dto: CreateCategory | UpdateCategory) {
    return plainToInstance(Category, instanceToPlain(dto));
  }
}
