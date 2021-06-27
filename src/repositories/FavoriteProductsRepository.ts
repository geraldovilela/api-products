import { EntityRepository, Repository } from "typeorm";
import { FavoretiProducts } from "../entities/FavoriteProducts";

@EntityRepository(FavoretiProducts)
class FavoriteProductsRepository extends Repository<FavoretiProducts> {

}

export { FavoriteProductsRepository }