import { MessageRepository } from "../../repository/message";
export default class implements MessageRepository {
    save(...args: Parameters<MessageRepository["save"]>): ReturnType<MessageRepository["save"]>;
    getById(...args: Parameters<MessageRepository["getById"]>): ReturnType<MessageRepository["getById"]>;
    updateById(...args: Parameters<MessageRepository["updateById"]>): ReturnType<MessageRepository["updateById"]>;
    deleteById(...args: Parameters<MessageRepository["deleteById"]>): ReturnType<MessageRepository["deleteById"]>;
    private generateId;
}
//# sourceMappingURL=messageImpl.d.ts.map