import { MessageRepository } from "../repository/message"
import { PublishingRepository } from "../repository/publishing"
import { PublishingService } from "../service/publishing"
import { UserRepository } from "../repository/user"

export type PublishingContentDTO = {
  userId: number,
  message: string,
  image?: string
}

export abstract class CreatePublicationAbstract {
  constructor(
    protected messageRepository: MessageRepository,
    protected publishingRepository: PublishingRepository,
    protected userRepository: UserRepository,
    protected publishingService: PublishingService
  ) { }
  abstract createPublication(content: PublishingContentDTO): Promise<void>
}
