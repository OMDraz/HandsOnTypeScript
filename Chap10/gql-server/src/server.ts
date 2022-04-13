import express from "express";
import { createServer } from "http";
import { makeExecutableSchema } from '@graphql-tools/schema'
import {
  ApolloServer,
  PubSub,
} from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { applyMiddleware } from "graphql-middleware";
import { log } from "./Logger";


async function startApolloServer(typeDefs: any, resolvers: any) {
  // Same ApolloServer initialization as before
  const server = new ApolloServer({ typeDefs, resolvers });

  // Required logic for integrating with Express
  await server.start();

  const app = express();

  server.applyMiddleware({
     app,

     // By default, apollo-server hosts its GraphQL endpoint at the
     // server root. However, *other* Apollo Server packages host it at
     // /graphql. Optionally provide this to match apollo-server.
     path: '/graphql'
  });

  // Modified server startup
  await new Promise<void>(resolve => {
      return app.listen({ port: 8000 }, resolve);
  });
  console.log(`🚀 Server ready at http://localhost:8000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);