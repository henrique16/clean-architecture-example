import { Publishing } from "../../domain/publishing"
import { PublishingRepository } from "../../repository/publishing"
const map: Map<number, Publishing> = new Map()

export default class implements PublishingRepository {
  async save(...args: Parameters<PublishingRepository["save"]>): ReturnType<PublishingRepository["save"]> {
    const [publishing] = args
    const id = this.generateId()
    const newPublishing = { ...publishing, id }
    map.set(id, newPublishing)
    return newPublishing
  }

  async getById(...args: Parameters<PublishingRepository["getById"]>): ReturnType<PublishingRepository["getById"]> {
    const [id] = args
    return map.get(id) || {} as Publishing
  }

  async updateById(...args: Parameters<PublishingRepository["updateById"]>): ReturnType<PublishingRepository["updateById"]> {
    const [id, publishing] = args
    let existingPublishing = await this.getById(id)
    if (!existingPublishing) {
      throw new Error("PublishingRepository.updateById: Message not found" + id)
    }
    map.set(id, { ...existingPublishing, ...publishing })
    return this.getById(id)
  }

  async deleteById(...args: Parameters<PublishingRepository["deleteById"]>): ReturnType<PublishingRepository["deleteById"]> {
    const [id] = args
    map.delete(id)
  }

  private generateId(): number {
    return Math.floor(Math.random() * 1000000)
  }
}
