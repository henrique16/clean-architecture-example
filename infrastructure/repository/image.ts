import { Image } from "../../domain/image"
import { ImageRepository } from "../../repository/image"
const map: Map<number, Image> = new Map()

export default class implements ImageRepository {
  async getById(...args: Parameters<ImageRepository["getById"]>): ReturnType<ImageRepository["getById"]> {
    const [id] = args
    return map.get(id) || {} as Image
  }

  async save(...args: Parameters<ImageRepository["save"]>): ReturnType<ImageRepository["save"]> {
    const [image] = args
    const id = this.generateId()
    const newImage = { ...image, id }
    map.set(id, newImage)
    return newImage
  }

  async updateById(...args: Parameters<ImageRepository["updateById"]>): ReturnType<ImageRepository["updateById"]> {
    const [id, image] = args
    let existingImage = await this.getById(id)
    if (!existingImage) {
      throw new Error("ImageRepository.updateById: Image not found" + id)
    }
    map.set(id, { ...existingImage, ...image })
    return this.getById(id)
  }

  async deleteById(...args: Parameters<ImageRepository["deleteById"]>): ReturnType<ImageRepository["deleteById"]> {
    const [id] = args
    map.delete(id)
  }

  private generateId(): number {
    return Math.floor(Math.random() * 1000000)
  }
}