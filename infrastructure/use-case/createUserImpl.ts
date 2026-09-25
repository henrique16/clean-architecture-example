import { CreateUserAbstract } from "../../use-case/createUser"

export default class extends CreateUserAbstract {
  createUser(...args: Parameters<CreateUserAbstract["createUser"]>): ReturnType<CreateUserAbstract["createUser"]> {
    return this.userRepository.save(...args)
  }
}
