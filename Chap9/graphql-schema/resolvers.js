"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const resolvers = {
    Query: {
        getUser: async (obj, args, ctx, info) => {
            return {
                id: (0, uuid_1.v4)(),
                username: "dave",
            };
        },
        getTodos: async (parent, args, ctx, info) => {
            return [
                {
                    id: (0, uuid_1.v4)(),
                    title: "First todo",
                    description: "First todo description",
                },
                {
                    id: (0, uuid_1.v4)(),
                    title: "Second todo",
                    description: "Second todo description",
                },
                {
                    id: (0, uuid_1.v4)(),
                    title: "Third todo",
                },
            ];
        },
    }
};
exports.default = resolvers;
