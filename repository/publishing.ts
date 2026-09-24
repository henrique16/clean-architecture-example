import { Publishing } from "../domain/publishing"

export interface PublishingRepository {
  getById(id: number): Promise<Publishing>
  save(publishing: Publishing): Promise<Publishing>
  updateById(id: number, publishing: Partial<Publishing>): Promise<Publishing>
  deleteById(id: number): Promise<void>
}
