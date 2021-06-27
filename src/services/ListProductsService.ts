import { getCustomRepository } from "typeorm";
import { ProductsRepository } from "../repositories/ProductsRepository";

class ListProductService {
  async execute() {
    const productRepositorie = getCustomRepository(ProductsRepository);

    const products = await productRepositorie.find();

    return products;
  }

}

export { ListProductService };