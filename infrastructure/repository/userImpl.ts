import { User } from "../../domain/user"
import { UserRepository } from "../../repository/user"
const map: Map<number, User> = new Map()

export default class implements UserRepository {
  async save(...args: Parameters<UserRepository["save"]>): ReturnType<UserRepository["save"]> {
    const [user] = args
    const id = this.generateId()
    const newUser = { ...user, id }
    map.set(id, newUser)
    return newUser
  }

  async getById(...args: Parameters<UserRepository["getById"]>): ReturnType<UserRepository["getById"]> {
    const [id] = args
    return map.get(id) || {} as User
  }

  async updateById(...args: Parameters<UserRepository["updateById"]>): ReturnType<UserRepository["updateById"]> {
    const [id, user] = args
    let existingUser = await this.getById(id)
    if (!existingUser) {
      throw new Error("UserRepository.updateById: Message not found" + id)
    }
    map.set(id, { ...existingUser, ...user })
    return this.getById(id)
  }

  async deleteById(...args: Parameters<UserRepository["deleteById"]>): ReturnType<UserRepository["deleteById"]> {
    const [id] = args
    map.delete(id)
  }

  private generateId(): number {
    return Math.floor(Math.random() * 1000000)
  }
}
