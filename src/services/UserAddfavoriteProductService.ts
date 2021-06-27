/* import { getCustomRepository, getMongoManager, getMongoRepository } from "typeorm";
import { ProductsRepositorie } from "../repositories/ProductsRepository";
import { UsersRepositories } from "../repositories/UsersRepository";
import { FavoriteProductsRepository } from '../repositories/FavoriteProductsRepository'

interface IUserProductRequest {
  user_id: string;

  product_id: string;
}

class UserAddfavoriteProductService {

  async execute({ product_id, user_id }: IUserProductRequest) {
    const userRepositorie = getCustomRepository(UsersRepositories);
    const productRepositorie = getCustomRepository(ProductsRepositorie);
    const favoriteProducts = getCustomRepository(FavoriteProductsRepository);
    const user = await userRepositorie.findOne(user_id);
    const product = await productRepositorie.findOne(product_id);

    if (!product) {
      throw new Error("Invalid product")
    }

    const newFavorite = favoriteProducts.create({
      userProfile: user,
      productProfile: product,
    })

    await favoriteProducts.save(newFavorite);

    const userProducts = await favoriteProducts.find(
      {
        where:{
          user_id:user_id
        }
      }
      )

    return userProducts;
  }
}

export { UserAddfavoriteProductService } */