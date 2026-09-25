import { Publishing } from "../domain/publishing"

export interface PublishingRepository {
  getById(id: number): Promise<Publishing>
  save(publishing: Omit<Publishing, "id">): Promise<Publishing>
  updateById(id: number, publishing: Partial<Omit<Publishing, "id"> >): Promise<Publishing>
  deleteById(id: number): Promise<void>
}
