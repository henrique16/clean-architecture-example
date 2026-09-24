import composition from "./composition";
const CreatePublication = composition.createPublication.exec

CreatePublication({
   message: "New publication",
   userName: "John Doe",
   image: "https://example.com/image.jpg",
})
