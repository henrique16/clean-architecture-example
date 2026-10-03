import { MessageRepository } from "../repository/message"
import { PublishingRepository } from "../repository/publishing"
import { UserRepository } from "../repository/user"
import { PublishingService } from "../service/publishing"
import { CreatePublication } from "../use-case/createPublication"
import { CreateUser } from "../use-case/createUser"
import { ImageRepository } from "../repository/image"

// Injected dependencies
const messageRepository: MessageRepository = {} as any
const publishingRepository: PublishingRepository = {} as any
const userRepository: UserRepository = {} as any
const publishingService: PublishingService = {} as any
const imageRepository: ImageRepository = {} as any

// Use cases
const createPublicationInstance = new CreatePublication(
  userRepository,
  messageRepository,
  imageRepository,
  publishingRepository,
  publishingService
)
const createPublication = createPublicationInstance.execute.bind(createPublicationInstance)

const createUserInstance = new CreateUser(userRepository)
const createUser = createUserInstance.execute.bind(createUserInstance)

export { createPublication, createUser }
