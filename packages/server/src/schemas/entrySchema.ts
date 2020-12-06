import { GraphQLEnumType, GraphQLInt, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { globalIdField, connectionDefinitions } from 'graphql-relay';
import { EntryType } from "../models/Entry";
import { nodeInterface } from "./rootSchema";
import userType from "./userSchema";

export const EntryGraphqlEnumType = new GraphQLEnumType({
  name: 'ENtryType',
  values: {
    INCOME: {
      value: EntryType.INCOME
    },
    EXPENSE: {
      value: EntryType.EXPENSE
    },
  }
})

const entryType = new GraphQLObjectType({
  name: 'Entry type',
  description: 'Query for a user entry',
  interfaces: () => [nodeInterface],
  fields: {
    id: globalIdField(),
    amount: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: (parent, args, context, info) => {
        return parent.amount;
      }
    },
    type: {
      type: new GraphQLNonNull(EntryGraphqlEnumType),
      resolve: (parent, args, context, info) => {
        return parent.type;
      }
    },
    user: {
      type: new GraphQLNonNull(userType),
      resolve: (parent, args, context, info) => {
        return parent.user
      },
    }
  }
})

export const { connectionType: EntryConnection } = connectionDefinitions({
  nodeType: entryType,
})

export default entryType
