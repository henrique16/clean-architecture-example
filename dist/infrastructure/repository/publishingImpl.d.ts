import { PublishingRepository } from "../../repository/publishing";
export default class implements PublishingRepository {
    save(...args: Parameters<PublishingRepository["save"]>): ReturnType<PublishingRepository["save"]>;
    getById(...args: Parameters<PublishingRepository["getById"]>): ReturnType<PublishingRepository["getById"]>;
    updateById(...args: Parameters<PublishingRepository["updateById"]>): ReturnType<PublishingRepository["updateById"]>;
    deleteById(...args: Parameters<PublishingRepository["deleteById"]>): ReturnType<PublishingRepository["deleteById"]>;
    private generateId;
}
//# sourceMappingURL=publishingImpl.d.ts.map