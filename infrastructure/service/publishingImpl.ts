import { PublishingService, PublishingContent } from "../../service/publishing"

export default class implements PublishingService {
  publish(content: PublishingContent): Promise<void> {
    return Promise.resolve()
  }
}
