"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
var userType = new graphql_1.GraphQLObjectType({
    name: 'UserType',
    description: 'Query for a specific user',
    fields: {
        _id: {
            type: graphql_1.GraphQLID,
            resolve: function (parent, args, context, info) {
                return parent._id;
            }
        },
        name: {
            type: graphql_1.GraphQLString,
            resolve: function (parent, args, context, info) {
                return parent.name;
            }
        },
        email: {
            type: graphql_1.GraphQLString,
            resolve: function (parent, args, context, info) {
                return parent.email;
            }
        },
        createdAt: {
            type: graphql_1.GraphQLString,
            resolve: function (parent, args, context, info) {
                return parent.createdAt;
            }
        }
    }
});
exports["default"] = userType;
//# sourceMappingURL=userSchema.js.map