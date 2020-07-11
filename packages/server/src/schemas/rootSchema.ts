import {
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import userType from './userSchema';
import userController from '../controllers/UsersController';

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
  },
});

export default rootSchema;
