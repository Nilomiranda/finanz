import {
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType,
} from 'graphql';
import userType, { UserConnection } from './userSchema';
import userController from '../controllers/UsersController';
import authController from '../controllers/AuthController';
import entryController from '../controllers/EntryController';
import authType from './authSchema';
import {
  connectionArgs,
  connectionFromPromisedArray,
  fromGlobalId,
} from 'graphql-relay';
import entryType, {
  EntryConnection,
  fetchEntriesArgsDefinition,
} from './entrySchema';

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
        return userController.getUser(fromGlobalId(args.id).id);
      },
    },
    users: {
      type: UserConnection,
      args: connectionArgs,
      resolve: (parent, args, context, info) => {
        return connectionFromPromisedArray(userController.getUsers(), args);
      },
    },
    entry: {
      type: entryType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (parent, args, contet, info) => {
        return entryController.getEntry(fromGlobalId(args.id).id);
      },
    },
    entries: {
      type: EntryConnection,
      args: {
        ...connectionArgs,
        ...fetchEntriesArgsDefinition,
      },
      resolve: (parent, args, context, info) => {
        return connectionFromPromisedArray(
          entryController.getEntries({
            userId: args?.userId,
            createdDate: args?.createdDate,
          }),
          args
        );
      },
    },
    login: {
      type: authType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: (parent, args, context, info) => {
        return authController.login(args.email, args.password, context);
      },
    },
  },
});

export default rootSchema;
