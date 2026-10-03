"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createPublication_1 = require("../../use-case/createPublication");
class default_1 extends createPublication_1.CreatePublicationAbstract {
    async createPublication(...args) {
        const [content] = args;
        const message = {
            userId: content.userId,
            text: content.message
        };
        const image = {
            url: content.image || ""
        };
        const [savedUser, savedMessage, savedImage] = await Promise.all([
            this.userRepository.getById(content.userId),
            this.messageRepository.save(message),
            this.imageRepository.save(image)
        ]);
        console.log("Saved user:", savedUser);
        console.log("Saved message:", savedMessage);
        console.log("Saved image:", savedImage);
        const publishing = {
            userId: savedUser.id,
            messageId: savedMessage.id,
            imageId: savedImage.id
        };
        await this.publishingRepository.save(publishing);
        console.log("Saved publishing:", publishing);
        const publishingContent = {
            userName: savedUser.name,
            message: savedMessage.text,
            image: savedImage.url
        };
        await this.publishingService.publish(publishingContent).catch(error => {
            console.error(new Error(`Failed to create publication ${publishingContent}`));
            console.error(error);
        });
        console.log("Created publishing:", publishingContent);
    }
}
exports.default = default_1;
//# sourceMappingURL=createPublicationImpl.js.map