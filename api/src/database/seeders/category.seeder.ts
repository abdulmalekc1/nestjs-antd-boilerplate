import { Seeder } from '@jorgebodega/typeorm-seeding';
import { DataSource } from 'typeorm';
import { CategoryFactory } from '../factories/category.factory';

export default class CategorySeeder extends Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await new CategoryFactory().createMany(50);
  }
}
