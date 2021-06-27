/* import { Request, Response } from "express";
import { ListProductService } from "../services/ListProductsService";

class ListProductController {
  async handle(req: Request, res:Response){

    const listProductService = new ListProductService();

    const allProducts = await listProductService.execute();

    return res.json(allProducts)
  }
}

export { ListProductController }; */