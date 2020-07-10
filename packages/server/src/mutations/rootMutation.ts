import { GraphQLObjectType } from 'graphql';
import userType from '../schemas/userSchema';
import { createUser } from './userMutation';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutations',
  fields: {
    createUser: createUser(),
  },
});

export default mutation;
