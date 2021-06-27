import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entities/Product";

@EntityRepository(Product)
class ProductsRepositorie extends Repository<Product> {

}

export { ProductsRepositorie };