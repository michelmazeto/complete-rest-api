import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesController } from '../listCategory/ListCategoriesController';
import { ListCategoriesUseCase } from '../listCategory/ListCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export { listCategoriesController };
