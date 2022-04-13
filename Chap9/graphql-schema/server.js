"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
async function startApolloServer(typeDefs, resolvers) {
    // Same ApolloServer initialization as before
    const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
    // Required logic for integrating with Express
    await server.start();
    const app = (0, express_1.default)();
    server.applyMiddleware({
        app,
        // By default, apollo-server hosts its GraphQL endpoint at the
        // server root. However, *other* Apollo Server packages host it at
        // /graphql. Optionally provide this to match apollo-server.
        path: '/graphql'
    });
    // Modified server startup
    await new Promise(resolve => {
        return app.listen({ port: 8000 }, resolve);
    });
    console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`);
}
startApolloServer(typeDefs_1.default, resolvers_1.default);
