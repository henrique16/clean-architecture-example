"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map = new Map();
class default_1 {
    async save(...args) {
        const [message] = args;
        const id = this.generateId();
        const newMessage = { ...message, id };
        map.set(id, newMessage);
        return newMessage;
    }
    async getById(...args) {
        const [id] = args;
        return map.get(id) || {};
    }
    async updateById(...args) {
        const [id, message] = args;
        let existingMessage = await this.getById(id);
        if (!existingMessage) {
            throw new Error("MessageRepository.updateById: Message not found" + id);
        }
        map.set(id, { ...existingMessage, ...message });
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
//# sourceMappingURL=messageImpl.js.map