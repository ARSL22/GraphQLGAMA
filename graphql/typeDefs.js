import { gql } from 'apollo-server-express';


import { typeDefs as clientTypeDefs } from "./client/client";
import { typeDefs as demandTypeDefs } from "./Demand/demand";


///se implentar vazio o graphql nao deixa correr
const typeDefs = gql`
type Query {
    _root: String
}


${clientTypeDefs}
${demandTypeDefs}
`;


export default typeDefs;