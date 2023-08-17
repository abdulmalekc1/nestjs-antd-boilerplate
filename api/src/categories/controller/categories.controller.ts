import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  SerializeOptions,
} from '@nestjs/common';
import { UserRole } from 'src/users/entities/user.entity';
import { Auth } from '../../auth/decorators/auth.decorator';
import { GenericIDResponse } from '../../common/dtos/generic-id-response.dto';
import { CreateCategory } from '../dtos/create-category.dto';
import { ListCategoryRequest } from '../dtos/list-category-request.dto';
import { ListCategoryResponse } from '../dtos/list-category-response.dto';
import { CategoryRead } from '../dtos/category-read.dto';
import { UpdateCategory } from '../dtos/update-category.dto';
import { CategoryCrudService } from '../services/category-crud.service';

@Controller('/admin/categories')
@Auth([UserRole.Admin])
export class CategoryController {
  constructor(private readonly service: CategoryCrudService) {}

  @Get('')
  @SerializeOptions({ type: ListCategoryResponse })
  index(@Query() request: ListCategoryRequest): Promise<ListCategoryResponse> {
    return this.service.index(request);
  }

  @Post('')
  create(@Body() request: CreateCategory): Promise<GenericIDResponse> {
    return this.service.create(request);
  }

  @Get(':id')
  @SerializeOptions({ type: CategoryRead })
  async findById(@Param('id') id: string): Promise<CategoryRead> {
    return this.service.findById(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() request: UpdateCategory) {
    await this.service.update(id, request);
  }
}
