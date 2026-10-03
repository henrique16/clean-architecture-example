import { Image } from "../domain/image"
import { Message } from "../domain/message"
import { Publishing } from "../domain/publishing"
import { ImageRepository } from "../repository/image"
import { MessageRepository } from "../repository/message"
import { PublishingRepository } from "../repository/publishing"
import { UserRepository } from "../repository/user"
import { PublishingContent, PublishingService } from "../service/publishing"

export type PublishingContentDTO = {
  userId: number,
  message: string,
  image?: string
}

export class CreatePublication {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly messageRepository: MessageRepository,
    private readonly imageRepository: ImageRepository,
    private readonly publishingRepository: PublishingRepository,
    private readonly publishingService: PublishingService
  ) { }

  async execute(content: PublishingContentDTO): Promise<void> {
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
