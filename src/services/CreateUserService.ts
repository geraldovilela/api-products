import { getMongoRepository,  } from "typeorm";
import { User } from "../entities/User";
import { UsersRepositories } from "../repositories/UsersRepository"

interface IUserRequest {
  name:string;
  email:string;
  admin?:boolean;
  password: string;
}

class CreateUserService {

  async execute({email, name, admin=false, password}:IUserRequest): Promise<User> {
    const usersRepository = getMongoRepository(User);

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
      admin
    })
  
    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService }