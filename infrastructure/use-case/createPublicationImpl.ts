import { Image } from "../../domain/image"
import { Message } from "../../domain/message"
import { Publishing } from "../../domain/publishing"
import { PublishingContent } from "../../service/publishing"
import { CreatePublicationAbstract } from "../../use-case/createPublication"

export default class extends CreatePublicationAbstract {
  async createPublication(...args: Parameters<CreatePublicationAbstract["createPublication"]>): ReturnType<CreatePublicationAbstract["createPublication"]> {
    const [content] = args
    const message: Omit<Message, "id"> = {
      userId: content.userId,
      text: content.message
    }
    const image: Omit<Image, "id"> = {
      url: content.image || ""
    }
    const [savedUser, savedMessage, savedImage] = await Promise.all([
      this.userRepository.getById(content.userId),
      this.messageRepository.save(message),
      this.imageRepository.save(image)
    ])
    console.log("Saved user:", savedUser)
    console.log("Saved message:", savedMessage)
    console.log("Saved image:", savedImage)

    const publishing: Omit<Publishing, "id"> = {
      userId: savedUser.id,
      messageId: savedMessage.id,
      imageId: savedImage.id
    }
    await this.publishingRepository.save(publishing)
    console.log("Saved publishing:", publishing)

    const publishingContent: PublishingContent = {
      userName: savedUser.name,
      message: savedMessage.text,
      image: savedImage.url
    }
    await this.publishingService.publish(publishingContent).catch(error => {
      console.error(new Error(`Failed to create publication ${publishingContent}`))
      console.error(error)
    })
    console.log("Created publishing:", publishingContent)
  }
}
