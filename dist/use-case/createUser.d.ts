import { User } from "../domain/user";
import { UserRepository } from "../repository/user";
export declare abstract class CreateUserAbstract {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    abstract createUser(user: Omit<User, "id">): Promise<User>;
}
//# sourceMappingURL=createUser.d.ts.map