import { Product } from "../entities/Product";

class ListProductService {
  async execute() {

    const products = await Product.find();

    return products;
  }

}

export { ListProductService };