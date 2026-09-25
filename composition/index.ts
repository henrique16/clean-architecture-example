import { MessageRepository } from "../repository/message"
import { PublishingRepository } from "../repository/publishing"
import { UserRepository } from "../repository/user"
import { PublishingService } from "../service/publishing"
import { CreatePublication } from "../use-case/createPublication"
import { CreateUser } from "../use-case/createUser"
import MessageRepositoryImpl from "../infrastructure/repository/messageImpl"
import PublishingRepositoryImpl from "../infrastructure/repository/publishingImpl"
import UserRepositoryImpl from "../infrastructure/repository/userImpl"
import PublishingServiceImpl from "../infrastructure/service/publishingImpl"
import CreatePublicationImpl from "../infrastructure/use-case/createPublicationImpl"
import CreateUserImpl from "../infrastructure/use-case/createUserImpl"

// Injected dependencies
const messageRepository: MessageRepository = new MessageRepositoryImpl()
const publishingRepository: PublishingRepository = new PublishingRepositoryImpl()
const userRepository: UserRepository = new UserRepositoryImpl()
const publishingService: PublishingService = new PublishingServiceImpl()

// Use cases
const createPublication: typeof CreatePublication = CreatePublicationImpl(
  messageRepository, 
  publishingRepository, 
  userRepository, 
  publishingService
)

const createUser: typeof CreateUser = CreateUserImpl(userRepository)

export { createPublication, createUser }
