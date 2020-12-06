import { GraphQLInt, GraphQLNonNull, GraphQLObjectType } from "graphql";
import entryType, { EntryGraphqlEnumType } from "../schemas/entrySchema";
import entryController from '../controllers/EntryController';

export const NewEntryInput = new GraphQLObjectType({
  name: 'NewEntryInput',
  fields: {
    amount: {
      type: GraphQLNonNull(GraphQLInt)
    },
    type: {
      type: GraphQLNonNull(EntryGraphqlEnumType),
    },
  }
})

export const createNewEntry = () => {
  return {
    type: entryType,
    args: {
      input: {
        type: NewEntryInput,
      },
    },
    resolve: (parent, args, context, info) => {
      return entryController.createOne(args)
    }
  }
}
