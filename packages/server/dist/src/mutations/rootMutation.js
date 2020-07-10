"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
var userMutation_1 = require("./userMutation");
var mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    description: 'Root mutations',
    fields: {
        createUser: userMutation_1.createUser()
    }
});
exports["default"] = mutation;
//# sourceMappingURL=rootMutation.js.map