import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import { nodeInterface } from './rootSchema';

const userType = new GraphQLObjectType({
  name: 'UserType',
  description: 'Query for a specific user',
  interfaces: () => [nodeInterface],
  fields: {
    id: {
      type: GraphQLID,
      resolve: (parent, args, context, info) => {
        return parent.id;
      },
    },
    name: {
      type: GraphQLString,
      resolve: (parent, args, context, info) => {
        return parent.name;
      },
    },
    email: {
      type: GraphQLString,
      resolve: (parent, args, context, info) => {
        return parent.email;
      },
    },
    createdAt: {
      type: GraphQLString,
      resolve: (parent, args, context, info) => {
        return parent.createdAt;
      },
    },
  },
});

export default userType;
