import { User, IUser } from "../entities/User"

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {

  async execute({ email, name, admin = false, password }: IUserRequest): Promise<IUser> {
    
    if (!email) {
      throw new Error("Email is invalid.")
    }
    
    const userAlreadyExists = await User.findOne({
      email:email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists.")
    }

    const user = await User.create({
      name,
      email,
      password,
      admin,
    })

    return user;
  }
}

export { CreateUserService }