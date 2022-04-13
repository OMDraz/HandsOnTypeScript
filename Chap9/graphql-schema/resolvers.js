"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const db_1 = require("./db");
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
    },
    Mutation: {
        addTodo: async (parent, args, ctx, info) => {
            db_1.todos.push({
                id: (0, uuid_1.v4)(),
                title: args.title,
                description: args.description
            });
            return db_1.todos[db_1.todos.length - 1];
        },
    },
};
exports.default = resolvers;
