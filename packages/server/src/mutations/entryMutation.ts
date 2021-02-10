import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import entryType, { EntryGraphqlEnumType } from '../schemas/entrySchema';
import entryController from '../controllers/EntryController';
import { authGuard } from '../guards/authGuard';

export const NewEntryInput = new GraphQLInputObjectType({
  name: 'NewEntryInput',
  fields: {
    amount: {
      type: GraphQLNonNull(GraphQLInt),
    },
    type: {
      type: GraphQLNonNull(EntryGraphqlEnumType),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});

export const createNewEntry = () => {
  return {
    type: entryType,
    args: {
      input: {
        type: NewEntryInput,
      },
    },
    resolve: (parent, args, context, info) => {
      authGuard(context);
      return entryController.createOne(args, context);
    },
  };
};
