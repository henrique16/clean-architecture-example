"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map = new Map();
class default_1 {
    async getById(...args) {
        const [id] = args;
        return map.get(id) || {};
    }
    async save(...args) {
        const [image] = args;
        const id = this.generateId();
        const newImage = { ...image, id };
        map.set(id, newImage);
        return newImage;
    }
    async updateById(...args) {
        const [id, image] = args;
        let existingImage = await this.getById(id);
        if (!existingImage) {
            throw new Error("ImageRepository.updateById: Image not found" + id);
        }
        map.set(id, { ...existingImage, ...image });
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
//# sourceMappingURL=image.js.map