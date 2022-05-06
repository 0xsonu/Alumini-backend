import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import * as express from 'express';
import * as http from 'http';
import { schema } from './schema';
import * as dotenv from 'dotenv';
dotenv.config();
async function startApolloServer() {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) => httpServer.listen({ port: process.env.PORT }, resolve));

  console.log(`🚀 Server ready at ${server.graphqlPath}`);
}
const typeDefs = startApolloServer();
