import { User } from "../domain/user"

export interface UserRepository {
  getById(id: number): Promise<User>
  save(user: User): Promise<User>
  updateById(id: number, user: Partial<User>): Promise<User>
  deleteById(id: number): Promise<void>
}
