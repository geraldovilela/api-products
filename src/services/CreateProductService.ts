import { getCustomRepository } from "typeorm";
import { ProductsRepositorie } from "../repositories/ProductsRepository";

interface IProductRequest{
  name:string;

  description:string;

  price:number;

  manufacturer:string;


}

class CreateProductService {

  async execute({description, name,price, manufacturer}:IProductRequest) {
    const productRepository = getCustomRepository(ProductsRepositorie);

    const product = productRepository.create({
      name,
      description,
      price,
      manufacturer
    })

    await productRepository.save(product);

    return product;
  }
}

export { CreateProductService };