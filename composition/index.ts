import { MessageRepository } from "../repository/message"
import { PublishingRepository } from "../repository/publishing"
import { UserRepository } from "../repository/user"
import { PublishingService } from "../service/publishing"
import { CreatePublicationAbstract } from "../use-case/createPublication"
import { CreateUserAbstract } from "../use-case/createUser"
import { ImageRepository } from "../repository/image"
import MessageRepositoryImpl from "../infrastructure/repository/messageImpl"
import PublishingRepositoryImpl from "../infrastructure/repository/publishingImpl"
import UserRepositoryImpl from "../infrastructure/repository/userImpl"
import PublishingServiceImpl from "../infrastructure/service/publishingImpl"
import CreatePublicationImpl from "../infrastructure/use-case/createPublicationImpl"
import CreateUserImpl from "../infrastructure/use-case/createUserImpl"
import ImageRepositoryImpl from "../infrastructure/repository/image"

// Injected dependencies
const messageRepository: MessageRepository = new MessageRepositoryImpl()
const publishingRepository: PublishingRepository = new PublishingRepositoryImpl()
const userRepository: UserRepository = new UserRepositoryImpl()
const publishingService: PublishingService = new PublishingServiceImpl()
const imageRepository: ImageRepository = new ImageRepositoryImpl()

// Use cases
const CreatePublication: CreatePublicationAbstract = new CreatePublicationImpl(
  messageRepository, 
  publishingRepository, 
  userRepository,
  imageRepository,
  publishingService
)
const createPublication = CreatePublication.createPublication.bind(CreatePublication)

const CreateUser: CreateUserAbstract = new CreateUserImpl(userRepository)
const createUser = CreateUser.createUser.bind(CreateUser)

export { createPublication, createUser }
