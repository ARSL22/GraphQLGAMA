import express from 'express';
import { ApolloServer }  from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
//ApolloServer.start();

const app = express();

const server = new ApolloServer({
    //o gql trabalha em cima de template strings os comandos abaixo sao graphos. 
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
    typeDefs,
  resolvers,

});

server.start().then(res => {

    server.applyMiddleware({
        app,
        csrFPrevention: true,
        cors:{
            origin: ['http://127.0.0.1:3001', "http://studio.apollographql.com"]
        },
bodyParserConfig: true,

    });

});


//server.get('/status', (_, response) => {
    //response.send({
    //   status: 'Okay',
  //  });
//});

//server
    //.options('/authenticate', enableCors)
    //.post('/authenticate', enableCors, express.json(), (request, response) => {
    //console.log('E-Mail', request.body.email, 'Senha', request.body.password);
      //  response.send({
    //    Okay: true,
  //  });
//});


const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';
    
app.listen(PORT, HOSTNAME, () => { 
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);

});



