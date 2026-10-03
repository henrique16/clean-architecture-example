"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.createPublication = void 0;
const messageImpl_1 = __importDefault(require("../infrastructure/repository/messageImpl"));
const publishingImpl_1 = __importDefault(require("../infrastructure/repository/publishingImpl"));
const userImpl_1 = __importDefault(require("../infrastructure/repository/userImpl"));
const publishingImpl_2 = __importDefault(require("../infrastructure/service/publishingImpl"));
const createPublicationImpl_1 = __importDefault(require("../infrastructure/use-case/createPublicationImpl"));
const createUserImpl_1 = __importDefault(require("../infrastructure/use-case/createUserImpl"));
const image_1 = __importDefault(require("../infrastructure/repository/image"));
// Injected dependencies
const messageRepository = new messageImpl_1.default();
const publishingRepository = new publishingImpl_1.default();
const userRepository = new userImpl_1.default();
const publishingService = new publishingImpl_2.default();
const imageRepository = new image_1.default();
// Use cases
const CreatePublication = new createPublicationImpl_1.default(messageRepository, publishingRepository, userRepository, imageRepository, publishingService);
const createPublication = CreatePublication.createPublication.bind(CreatePublication);
exports.createPublication = createPublication;
const CreateUser = new createUserImpl_1.default(userRepository);
const createUser = CreateUser.createUser.bind(CreateUser);
exports.createUser = createUser;
//# sourceMappingURL=index.js.map