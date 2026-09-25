import { Message } from "../domain/message"
import { Publishing } from "../domain/publishing"
import { User } from "../domain/user"
import { MessageRepository } from "../repository/message"
import { PublishingRepository } from "../repository/publishing"
import { UserRepository } from "../repository/user"
import { PublishingContent, PublishingService } from "../service/publishing"

export declare function CreatePublication(content: PublishingContent): Promise<void>

export default class {
  constructor(
    private readonly messageRepository: MessageRepository,
    private readonly publishingRepository: PublishingRepository,
    private readonly userRepository: UserRepository,
    private readonly publishingService: PublishingService
  ) { }

  exec: typeof CreatePublication = async (content) => {
    const message: Message = {} as any
    const user: User = {} as any
    const publishing: Publishing = {} as any

    await Promise.all([
      this.messageRepository.save(message),
      this.userRepository.save(user),
      this.publishingRepository.save(publishing)
    ]).catch(error => {
      console.error(new Error(`Failed to save publication ${content}`))
      console.error(error)
    })

    await this.publishingService.publish(content).catch(error => {
      console.error(new Error(`Failed to create publication ${content}`))
      console.error(error)
    })
  }
}
