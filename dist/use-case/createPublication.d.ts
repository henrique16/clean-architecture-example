import { MessageRepository } from "../repository/message";
import { PublishingRepository } from "../repository/publishing";
import { PublishingService } from "../service/publishing";
import { UserRepository } from "../repository/user";
import { ImageRepository } from "../repository/image";
export type PublishingContentDTO = {
    userId: number;
    message: string;
    image?: string;
};
export declare abstract class CreatePublicationAbstract {
    protected messageRepository: MessageRepository;
    protected publishingRepository: PublishingRepository;
    protected userRepository: UserRepository;
    protected imageRepository: ImageRepository;
    protected publishingService: PublishingService;
    constructor(messageRepository: MessageRepository, publishingRepository: PublishingRepository, userRepository: UserRepository, imageRepository: ImageRepository, publishingService: PublishingService);
    abstract createPublication(content: PublishingContentDTO): Promise<void>;
}
//# sourceMappingURL=createPublication.d.ts.map