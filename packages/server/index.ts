import Koa from 'koa';
import mongoose from 'mongoose';
import Router from 'koa-router';
import { ApolloServer, gql } from 'apollo-server-koa';

const app = new Koa();
const router = new Router();

mongoose.connect('mongodb://localhost/finanz?authSource=admin', {
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

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const apolloServer = new ApolloServer({
  playground: true,
  typeDefs,
  resolvers,
});

apolloServer.applyMiddleware({ app });

// const testSchema = new mongoose.Schema({
//   name: String,
// });
//
// const test = mongoose.model('Test', testSchema);
//
// const newTest = new test({ name: 'Danilo' });
//
// newTest.save();

app.use(router.routes());

app.listen(3000, () => {
  console.log(
    `🚀 Server ready at http://localhost:3000${apolloServer.graphqlPath}`
  );
});
