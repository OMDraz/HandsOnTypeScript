import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";
import faker from "faker";
import { testGraphQLQuery } from "./testGraphQLQuery";
import { addMockFunctionsToSchema } from "apollo-server-express";


describe("Testing getting a user", () => {
    const GetUser = `
        query GetUser($id: ID!) {
            getUSer(id: $id) {
                id 
                username
                email
            }
        }
    `;
})