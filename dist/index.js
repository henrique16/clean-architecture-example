"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const composition_1 = require("./composition");
(0, composition_1.createUser)({
    name: "John Doe",
    type: "standard",
}).then(user => {
    (0, composition_1.createPublication)({
        message: "New publication",
        userId: user.id,
        image: "https://example.com/image.jpg",
    });
});
//# sourceMappingURL=index.js.map