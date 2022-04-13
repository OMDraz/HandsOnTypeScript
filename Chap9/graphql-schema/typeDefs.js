"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type User {
    id: ID!
    username: String!
    email: String
  }
  type Todo {
    id: ID!
    title: String!
    description: String
  }
  type Query {
    getUser(id: ID): User
    getTodos: [Todo!]
  }
  type Mutation {
    addTodo(title: String!, description: String): Todo
  }
`;
exports.default = typeDefs;
