export type PublishingContentDTO = {
  userId: number,
  message: string,
  image?: string
}

export declare function CreatePublication(content: PublishingContentDTO): Promise<void>
