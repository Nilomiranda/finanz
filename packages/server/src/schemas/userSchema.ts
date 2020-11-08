import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { globalIdField } from 'graphql-relay';
import { nodeInterface } from './rootSchema';
import { connectionDefinitions } from 'graphql-relay'

const userType = new GraphQLObjectType({
  name: 'UserType',
  description: 'Query for a specific user',
  interfaces: () => [nodeInterface],
  fields: {
    id: globalIdField(),
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

export const { connectionType: UserConnection } = connectionDefinitions({
  nodeType: userType,
})

export default userType;
