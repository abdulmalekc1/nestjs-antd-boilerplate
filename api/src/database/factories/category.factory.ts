import {
  Constructable,
  FactorizedAttrs,
  Factory,
  SingleSubfactory,
} from '@jorgebodega/typeorm-factory';
import { DataSource } from 'typeorm';
import { dataSource } from '../datasource';
import { faker } from '@faker-js/faker';
import { CategoryType } from '../../categories/enums';

import { Category } from '../../categories/entities/category.entity';
import { UserFactory } from './user.factory';
import { UserRole } from '../../users/entities/user.entity';

export class CategoryFactory extends Factory<Category> {
  protected entity: Constructable<Category> = Category;
  protected dataSource: DataSource = dataSource;

  protected attrs(): FactorizedAttrs<Category> {
    const categoryType = faker.helpers.enumValue(CategoryType);
    const title = faker.animal.type();

    const commonAttrs: FactorizedAttrs<Category> = {
      type: categoryType,
      title,
      user: new SingleSubfactory(UserFactory, { role: UserRole.User }),
    };

    return {
      ...commonAttrs,
    };
  }
}
