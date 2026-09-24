export type User = {
  id: number
  name: string
  type: UserType
}

export type UserType = "standard" | "premium"
