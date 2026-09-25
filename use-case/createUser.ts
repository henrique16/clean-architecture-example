import { User } from "../domain/user"

export declare function CreateUser(user: Omit<User, "id">): Promise<User>
