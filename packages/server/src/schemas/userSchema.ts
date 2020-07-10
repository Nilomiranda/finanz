import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

const userType = new GraphQLObjectType({
  name: 'UserType',
  description: 'Query for a specific user',
  fields: {
    _id: {
      type: GraphQLID,
      resolve: (parent, args, context, info) => {
        return parent._id;
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
