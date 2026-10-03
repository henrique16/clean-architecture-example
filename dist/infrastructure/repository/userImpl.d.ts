import { UserRepository } from "../../repository/user";
export default class implements UserRepository {
    save(...args: Parameters<UserRepository["save"]>): ReturnType<UserRepository["save"]>;
    getById(...args: Parameters<UserRepository["getById"]>): ReturnType<UserRepository["getById"]>;
    updateById(...args: Parameters<UserRepository["updateById"]>): ReturnType<UserRepository["updateById"]>;
    deleteById(...args: Parameters<UserRepository["deleteById"]>): ReturnType<UserRepository["deleteById"]>;
    private generateId;
}
//# sourceMappingURL=userImpl.d.ts.map