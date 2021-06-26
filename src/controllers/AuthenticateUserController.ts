import { Request, response, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";


class AuthenticateUserController {

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authenticanteUserService = new AuthenticateUserService();
    
    const jwtToken = await authenticanteUserService.execute({
      email, password
    });

    return res.json(jwtToken);
  }

}

export { AuthenticateUserController };