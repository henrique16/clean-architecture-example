export type PublishingContent = {
  message: string
  image?: string
  userName: string
}

export interface PublishingService {
  publish(content: PublishingContent): Promise<void>;
}
