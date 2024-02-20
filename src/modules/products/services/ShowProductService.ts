import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../infra/typeorm/repositories/ProductsRepository';
import Product from '../infra/typeorm/entities/Product';
import AppError from '@shared/errors/appError';

interface IRequest {
  id: string;
}

class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    return product;
  }
}

export default ShowProductService;
