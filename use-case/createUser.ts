import { User } from "../domain/user"
import { UserRepository } from "../repository/user";

export abstract class CreateUserAbstract {
  constructor(
    protected userRepository: UserRepository
  ) {}
  abstract createUser(user: Omit<User, "id">): Promise<User>
}
