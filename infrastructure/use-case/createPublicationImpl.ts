import { Message } from "../../domain/message"
import { Publishing } from "../../domain/publishing"
import { MessageRepository } from "../../repository/message"
import { PublishingRepository } from "../../repository/publishing"
import { UserRepository } from "../../repository/user"
import { PublishingContent, PublishingService } from "../../service/publishing"
import { CreatePublication } from "../../use-case/createPublication"

export default function (
  messageRepository: MessageRepository,
  publishingRepository: PublishingRepository,
  userRepository: UserRepository,
  publishingService: PublishingService
): typeof CreatePublication {

  return async function (content) {
    const message: Omit<Message, "id"> = {
      userId: content.userId,
      text: content.message
    }
    const [savedUser, savedMessage, savedImage] = await Promise.all([
      userRepository.getById(content.userId),
      messageRepository.save(message),
      // SAVE IMAGE
      Promise.resolve({ id: 1, url: content.image })
    ])
    console.log("Saved user:", savedUser)
    console.log("Saved message:", savedMessage)
    console.log("Saved image:", savedImage)

    const publishing: Omit<Publishing, "id"> = {
      userId: savedUser.id,
      messageId: savedMessage.id,
      imageId: savedImage.id
    }
    await publishingRepository.save(publishing)
    console.log("Saved publishing:", publishing)

    const publishingContent: PublishingContent = {
      userName: savedUser.name,
      message: savedMessage.text,
      image: savedImage.url
    }
    await publishingService.publish(publishingContent).catch(error => {
      console.error(new Error(`Failed to create publication ${publishingContent}`))
      console.error(error)
    })
    console.log("Created publishing:", publishingContent)
  }
}
