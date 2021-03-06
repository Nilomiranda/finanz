import Koa, { Context } from 'koa';
import mongoose from 'mongoose';
import Router from 'koa-router';
import { ApolloServer, gql } from 'apollo-server-koa';
import { GraphQLSchema } from 'graphql';
import rootSchema from './src/schemas/rootSchema';
import mutation from './src/mutations/rootMutation';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = new Koa();
const router = new Router();

mongoose.connect(process.env.MONGODB_URL || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('Error when connecting to database');
});
db.once('open', () => {
  console.log('Successfully connected to database');
});

export const schemaObject = new GraphQLSchema({
  query: rootSchema,
  mutation,
});

export const apolloServer = new ApolloServer({
  playground: true,
  schema: schemaObject,
  context: ({ ctx }: { ctx: Context }) => {
    return ctx;
  },
});

apolloServer.applyMiddleware({ app });

app.use(cookieParser());
app.use(router.routes());

app.listen(3000, () => {
  console.log(
    `🚀 Server ready at http://localhost:3000${apolloServer.graphqlPath}`
  );
});
