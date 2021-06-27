import { User } from "../entities/User";
class ListUsersService {

  async execute() {
    const users = await User.find();

    return users;
  }
}

export { ListUsersService }