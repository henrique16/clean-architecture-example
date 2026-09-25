import { Image } from "../domain/image"

export interface ImageRepository {
  getById(id: number): Promise<Image>
  save(image: Omit<Image, "id">): Promise<Image>
  updateById(id: number, image: Partial<Omit<Image, "id">>): Promise<Image>
  deleteById(id: number): Promise<void>
}
