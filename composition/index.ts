import { MessageRepository } from "../repository/message"
import { PublishingRepository } from "../repository/publishing"
import { UserRepository } from "../repository/user"
import { PublishingService } from "../service/publishing"
import { CreatePublicationAbstract } from "../use-case/createPublication"
import { CreateUserAbstract } from "../use-case/createUser"

// Injected dependencies
const messageRepository: MessageRepository = {} as any
const publishingRepository: PublishingRepository = {} as any
const userRepository: UserRepository = {} as any
const publishingService: PublishingService = {} as any

// Use cases
const CreatePublication: CreatePublicationAbstract = {} as any
const createPublication = CreatePublication.createPublication

const CreateUser: CreateUserAbstract = {} as any
const createUser = CreateUser.createUser

export { createPublication, createUser }
