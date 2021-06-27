import { getCustomRepository } from "typeorm";
import { ProductsRepositorie } from "../repositories/ProductsRepository";

class ListProductService {
  async execute() {
    const productRepositorie = getCustomRepository(ProductsRepositorie);

    const products = await productRepositorie.find();

    return products;
  }

}

export { ListProductService };