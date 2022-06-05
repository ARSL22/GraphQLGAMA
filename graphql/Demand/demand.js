import { gql } from "apollo-server-express";

export const typeDefs = gql`
type : Demand {
id: ID!
name: String!
client: Client!
deadline: String
}

extend type Query{
demands: [Demand]!
}

`;


export const resolvers = {
    Query: {
        demands: () => [],
    },
};

//extend type Query{demands: [Demand]!}vamos extender o query e adicionar coisas para ele.

