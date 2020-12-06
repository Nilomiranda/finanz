import { GraphQLObjectType } from 'graphql';
import userType from '../schemas/userSchema';
import { createNewEntry } from './entryMutation';
import { createUser } from './userMutation';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutations',
  fields: {
    createUser: createUser(),
    createEntry: createNewEntry(),
  },
});

export default mutation;
