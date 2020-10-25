import {
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import userType from './userSchema';
import userController from '../controllers/UsersController';
import authController from '../controllers/AuthController'
import authType from './authSchema';
import { authGuard } from '../guards/authGuard';
import { AuthenticationError } from 'apollo-server-koa';

export const nodeInterface = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: {
      type: GraphQLID,
    },
  },
});

const rootSchema = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: userType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (parent, args, context, info) => {
        return userController.getUser(args.id);
      },
    },
    // TODO -> This needs to return a UserConnection
    users: {
      type: GraphQLList(userType),
      resolve: (parent, args, context, info) => {
        authGuard(context)
        return userController.getUsers();
      },
    },
    login: {
      type: authType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: (parent, args, context, info) => {
        return authController.login(args.email, args.password, context)
      }
    }
  },
});

export default rootSchema;
