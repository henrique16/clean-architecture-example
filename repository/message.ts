import { Message } from "../domain/message"

export interface MessageRepository {
  getById(id: number): Promise<Message>
  save(message: Message): Promise<Message>
  updateById(id: number, message: Partial<Message>): Promise<Message>
  deleteById(id: number): Promise<void>
}
