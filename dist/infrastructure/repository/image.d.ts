import { ImageRepository } from "../../repository/image";
export default class implements ImageRepository {
    getById(...args: Parameters<ImageRepository["getById"]>): ReturnType<ImageRepository["getById"]>;
    save(...args: Parameters<ImageRepository["save"]>): ReturnType<ImageRepository["save"]>;
    updateById(...args: Parameters<ImageRepository["updateById"]>): ReturnType<ImageRepository["updateById"]>;
    deleteById(...args: Parameters<ImageRepository["deleteById"]>): ReturnType<ImageRepository["deleteById"]>;
    private generateId;
}
//# sourceMappingURL=image.d.ts.map