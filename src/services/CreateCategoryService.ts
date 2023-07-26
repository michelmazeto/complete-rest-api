import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IResquest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IResquest): void {
    const alreadyExists = this.categoriesRepository.findByName(name);

    if (alreadyExists) throw new Error('Category already exists');

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
