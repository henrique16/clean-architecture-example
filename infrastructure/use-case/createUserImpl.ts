import { UserRepository } from "../../repository/user"
import { CreateUser } from "../../use-case/createUser"

export default function (userRepository: UserRepository): typeof CreateUser {
  return async function (user) {
    return userRepository.save(user).then(user => {
      console.log("Saved user:", user)
      return user
    })
  }
}
