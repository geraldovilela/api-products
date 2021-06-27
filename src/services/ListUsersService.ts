import { User } from "../entities/User";
class ListUsersService {

  async execute() {
    const users = await User.find().populate('favorites');

    return users;
  }
}

export { ListUsersService }