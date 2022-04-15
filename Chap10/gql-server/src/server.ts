import express from "express";
import { createServer } from "http";
import {
  ApolloServer,
  makeExecutableSchema,
} from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import { log } from "./Logger";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { PubSub } from 'graphql-subscriptions';



async function startApolloServer(typeDefs: any, resolvers: any) {
  const app = express();
  const pubsub = new PubSub();

  const schema = makeExecutableSchema({
    typeDefs, resolvers
  });

  const schemaWithMiddleWare = applyMiddleware(schema, log); 

  const apolloServer = new ApolloServer({
    schema: schemaWithMiddleWare,
    context: ({ req, res }: any) => ({ req, res, pubsub }),
  });

  // Required logic for integrating with Express
  await apolloServer.start();


  apolloServer.applyMiddleware({
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
  console.log(`🚀 Server ready at http://localhost:8000${apolloServer.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);