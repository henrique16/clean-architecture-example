"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_1 = require("../../use-case/createUser");
class default_1 extends createUser_1.CreateUserAbstract {
    createUser(...args) {
        return this.userRepository.save(...args);
    }
}
exports.default = default_1;
//# sourceMappingURL=createUserImpl.js.map