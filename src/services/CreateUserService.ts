import { getCustomRepository } from "typeorm";
import { Product } from "../entities/Product";
import { User } from "../entities/User";
import { UsersRepositories } from "../repositories/UsersRepository"

interface IUserRequest {
  name:string;
  email:string;
  admin?:boolean;
  password: string;
  products?: Product[];
}

class CreateUserService {

  async execute({email, name, admin=false, password, products=[]}:IUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepositories);

    if(!email) {
      throw new Error("Email is invalid.")
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if(userAlreadyExists){
      throw new Error("User already exists.")
    }

    const user = usersRepository.create({
      name,
      email,
      password,
      admin,
      products
    })
  
    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService }