import { IResolvers } from "graphql-tools";
import { v4 } from 'uuid';
import { GqlContext } from './GqlContext';

interface User {
    id: string;
    username: string;
    description?: string;
}
  
interface Todo {
    id: string;
    title: string;
    description?: string;
}

const resovlers: IResolvers = {
    Query: {
        getUser: async (
            obj: any,
            args: {
                id: string;
            },
            ctx: GqlContext,
            info: any
        ): Promixe<User> => {
            return {
                id: v4(),
                username: "dave",
            };
        },
    }
}

//finished at this line GqlContext