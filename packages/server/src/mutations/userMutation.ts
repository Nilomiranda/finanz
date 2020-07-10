import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import userType from '../schemas/userSchema';
import userController from '../controllers/UsersController';

export const createUser = () => {
  return {
    type: userType,
    args: {
      email: {
        type: GraphQLNonNull(GraphQLString),
      },
      name: {
        type: GraphQLNonNull(GraphQLString),
      },
      password: {
        type: GraphQLNonNull(GraphQLString),
      },
    },
    resolve: async (parent, args, context, info) => {
      return userController.createOne(args);
    },
  };
};
