import { User } from "../domain/user"

export interface UserRepository {
  getById(id: number): Promise<User>
  save(user: Omit<User, "id">): Promise<User>
  updateById(id: number, user: Partial<Omit<User, "id"> >): Promise<User>
  deleteById(id: number): Promise<void>
}
