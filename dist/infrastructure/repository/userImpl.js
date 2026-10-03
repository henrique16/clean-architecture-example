"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map = new Map();
class default_1 {
    async save(...args) {
        const [user] = args;
        const id = this.generateId();
        const newUser = { ...user, id };
        map.set(id, newUser);
        return newUser;
    }
    async getById(...args) {
        const [id] = args;
        return map.get(id) || {};
    }
    async updateById(...args) {
        const [id, user] = args;
        let existingUser = await this.getById(id);
        if (!existingUser) {
            throw new Error("UserRepository.updateById: Message not found" + id);
        }
        map.set(id, { ...existingUser, ...user });
        return this.getById(id);
    }
    async deleteById(...args) {
        const [id] = args;
        map.delete(id);
    }
    generateId() {
        return Math.floor(Math.random() * 1000000);
    }
}
exports.default = default_1;
//# sourceMappingURL=userImpl.js.map