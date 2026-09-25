import { MessageRepository } from "../repository/message"
import { PublishingRepository } from "../repository/publishing"
import { UserRepository } from "../repository/user"
import { PublishingService } from "../service/publishing"
import CreatePublicationImpl, { CreatePublication } from "../use-case/createPublication"

// Injected dependencies
const messageRepository: MessageRepository = {} as any
const publishingRepository: PublishingRepository = {} as any
const userRepository: UserRepository = {} as any
const publishingService: PublishingService = {} as any

// Use cases
const createPublication: typeof CreatePublication = new CreatePublicationImpl(
  messageRepository, 
  publishingRepository, 
  userRepository, 
  publishingService
).exec

export { createPublication }
