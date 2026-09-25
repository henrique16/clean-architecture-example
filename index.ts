import { createPublication, createUser } from "./composition"

createUser({
  name: "John Doe",
  type: "standard",
}).then(user => {
  createPublication({
     message: "New publication",
     userId: user.id,
     image: "https://example.com/image.jpg",
  })
})

