import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, description, manufacturer, price } = req.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      description,
      manufacturer,
      price
    })

    return res.json(product);
  }
}

export { CreateProductController };