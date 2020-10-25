import { GraphQLBoolean, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

const authType = new GraphQLObjectType({
  name: 'AuthType',
  description: 'Authentication related object',
  fields: {
    success: {
      type: GraphQLNonNull(GraphQLBoolean),
      resolve: (parent) => {
        return parent.success
      }
    },
  }
})

export default authType
