import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import userType from '../schemas/userSchema';
import userController from '../controllers/UsersController';

export const NewUserInput = new GraphQLInputObjectType({
  name: 'NewUserInput',
  fields: {
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
});

export const createUser = () => {
  return {
    type: userType,
    args: {
      input: {
        type: NewUserInput,
      },
    },
    resolve: async (parent, args, context, info) => {
      return userController.createOne(args);
    },
  };
};
