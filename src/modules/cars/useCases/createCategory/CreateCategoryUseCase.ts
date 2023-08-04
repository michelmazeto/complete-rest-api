import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { AppError } from '../../../../errors/AppError';

interface IResquest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ description, name }: IResquest): Promise<void> {
    const alreadyExists = await this.categoriesRepository.findByName(name);

    if (alreadyExists) throw new AppError('Category already exists');

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
