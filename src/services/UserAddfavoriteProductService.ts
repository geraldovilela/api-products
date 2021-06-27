import {User} from "../entities/User";
import {Product} from "../entities/Product";

interface IUserProductRequest {
  user_id: string;

  product_id: string;
}

class UserAddfavoriteProductService {

  async execute({ product_id, user_id }: IUserProductRequest) {
    
    const user = await User.findOne({user_id:user_id});
    const product = await Product.findOne({_id:product_id});
    console.log(product_id, user_id, product)
    if (!product) {
      throw new Error("Invalid product")
    }
    
    user.favorites.push(product._id);
    await User.updateOne({user_id:user_id}, user)
    return user;
  }
}

export { UserAddfavoriteProductService }