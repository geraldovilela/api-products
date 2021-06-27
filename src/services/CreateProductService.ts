import { Product } from "../entities/Product";
interface IProductRequest {
  name: string;

  description: string;

  price: number;

  manufacturer: string;


}

class CreateProductService {

  async execute({ description, name, price, manufacturer }: IProductRequest) {
    
    const product = await Product.create({
      name,
      description,
      price,
      manufacturer
    })
        
    return product;
  }
}

export { CreateProductService };