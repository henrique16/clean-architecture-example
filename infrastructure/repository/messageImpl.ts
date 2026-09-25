import { Message } from "../../domain/message"
import { MessageRepository } from "../../repository/message"
const map: Map<number, Message> = new Map()

export default class implements MessageRepository {
  async save(...args: Parameters<MessageRepository["save"]>): ReturnType<MessageRepository["save"]> {
    const [message] = args
    const id = this.generateId()
    const newMessage = { ...message, id }
    map.set(id, newMessage)
    return newMessage
  }

  async getById(...args: Parameters<MessageRepository["getById"]>): ReturnType<MessageRepository["getById"]> {
    const [id] = args
    return map.get(id) || {} as Message
  }

  async updateById(...args: Parameters<MessageRepository["updateById"]>): ReturnType<MessageRepository["updateById"]> {
    const [id, message] = args
    let existingMessage = await this.getById(id)
    if (!existingMessage) {
      throw new Error("MessageRepository.updateById: Message not found" + id)
    }
    map.set(id, { ...existingMessage, ...message })
    return this.getById(id)
  }

  async deleteById(...args: Parameters<MessageRepository["deleteById"]>): ReturnType<MessageRepository["deleteById"]> {
    const [id] = args
    map.delete(id)
  }

  private generateId(): number {
    return Math.floor(Math.random() * 1000000)
  }
}
