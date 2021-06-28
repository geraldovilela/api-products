import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { User } from "../entities/User";
interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {

    const user = await User.findOne({
      email: email
    }).select(["password", "user_id"])
    if (!user) {
      throw new Error("Email or Password doesnt match")
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or Password doesnt match")
    }

    const token = sign({ email: user.email, role: user.admin }, "4e2927ce2b7b7b4ce1868d13bc514eb5", {
      subject: `${user.user_id}`,
      expiresIn: "4h"
    })
    const userData = await User.findOne({email: email}).populate('favorites')
    return {user:userData, token};
  }
}

export { AuthenticateUserService };
