"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map = new Map();
class default_1 {
    async save(...args) {
        const [publishing] = args;
        const id = this.generateId();
        const newPublishing = { ...publishing, id };
        map.set(id, newPublishing);
        return newPublishing;
    }
    async getById(...args) {
        const [id] = args;
        return map.get(id) || {};
    }
    async updateById(...args) {
        const [id, publishing] = args;
        let existingPublishing = await this.getById(id);
        if (!existingPublishing) {
            throw new Error("PublishingRepository.updateById: Message not found" + id);
        }
        map.set(id, { ...existingPublishing, ...publishing });
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
//# sourceMappingURL=publishingImpl.js.map