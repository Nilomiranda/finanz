import { GraphQLEnumType, GraphQLInt, GraphQLNonNull } from "graphql";
import { EntryType } from "../models/Entry";


export const NewEntryInput = new GraphQLObjectType({
  name: 'NewEntryInput',
  fields: {
    amount: {
      type: GraphQLNonNull(GraphQLInt)
    },
    type: {
      type: GraphQLNonNull(new GraphQLEnumType({
        name:
      }))
    }
  }
})
