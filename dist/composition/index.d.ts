declare const createPublication: (content: import("../use-case/createPublication").PublishingContentDTO) => Promise<void>;
declare const createUser: (user: Omit<import("../domain/user").User, "id">) => Promise<import("../domain/user").User>;
export { createPublication, createUser };
//# sourceMappingURL=index.d.ts.map