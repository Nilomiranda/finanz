import {
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import userType, { UserConnection } from './userSchema';
import userController from '../controllers/UsersController';
import authController from '../controllers/AuthController'
import entryController from '../controllers/EntryController'
import authType from './authSchema';
import { connectionArgs, connectionFromPromisedArray } from 'graphql-relay'
import { EntryConnection } from './entrySchema';

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
    users: {
      type: UserConnection,
      args: connectionArgs,
      resolve: (parent, args, context, info) => {
        return connectionFromPromisedArray(
          userController.getUsers(),
          args
        )
      },
    },
    entries: {
      type: EntryConnection,
      args: connectionArgs,
      resolve: (parent, args, context, info) => {
        return connectionFromPromisedArray(
          entryController.getEntries(),
          args,
        )
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
