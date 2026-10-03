"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePublicationAbstract = void 0;
class CreatePublicationAbstract {
    messageRepository;
    publishingRepository;
    userRepository;
    imageRepository;
    publishingService;
    constructor(messageRepository, publishingRepository, userRepository, imageRepository, publishingService) {
        this.messageRepository = messageRepository;
        this.publishingRepository = publishingRepository;
        this.userRepository = userRepository;
        this.imageRepository = imageRepository;
        this.publishingService = publishingService;
    }
}
exports.CreatePublicationAbstract = CreatePublicationAbstract;
//# sourceMappingURL=createPublication.js.map