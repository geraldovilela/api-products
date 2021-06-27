import { Request, Response } from "express";
import { UserAddfavoriteProductService } from "../services/UserAddfavoriteProductService";

class UserAddFavoriteProductController {

  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const { product_id } = req.body;
    const userAddfavoriteProductService = new UserAddfavoriteProductService();

    const user_products = await userAddfavoriteProductService.execute({ user_id, product_id })

    return res.json(user_products);
  }
}

export {UserAddFavoriteProductController};