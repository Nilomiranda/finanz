import {
  GraphQLEnumType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { globalIdField, connectionDefinitions } from 'graphql-relay';
import { EntryType } from '../models/Entry';
import { nodeInterface } from './rootSchema';
import userType from './userSchema';

export const EntryGraphqlEnumType = new GraphQLEnumType({
  name: 'EntryTypeEnum',
  values: {
    INCOME: {
      value: EntryType.INCOME,
    },
    EXPENSE: {
      value: EntryType.EXPENSE,
    },
  },
});

const entryType = new GraphQLObjectType({
  name: 'EntryType',
  description: 'Query for a user entry',
  interfaces: () => [nodeInterface],
  fields: {
    id: globalIdField(),
    amount: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: (parent, args, context, info) => {
        return parent.amount;
      },
    },
    type: {
      type: new GraphQLNonNull(EntryGraphqlEnumType),
      resolve: (parent, args, context, info) => {
        return parent.type;
      },
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (parent, args, context, info) => {
        return parent.name;
      },
    },
    userId: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (parent, args, context, info) => {
        return parent.userId;
      },
    },
  },
});

export const { connectionType: EntryConnection } = connectionDefinitions({
  nodeType: entryType,
});

export default entryType;
