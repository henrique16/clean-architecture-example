import { User } from "../domain/user"
import { UserRepository } from "../repository/user"

export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {}

  execute(user: Omit<User, "id">): Promise<User> {
    return this.userRepository.save(user)
  }
}
