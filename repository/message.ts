import { Message } from "../domain/message"

export interface MessageRepository {
  getById(id: number): Promise<Message>
  save(message: Omit<Message, "id">): Promise<Message>
  updateById(id: number, message: Partial<Omit<Message, "id"> >): Promise<Message>
  deleteById(id: number): Promise<void>
}
