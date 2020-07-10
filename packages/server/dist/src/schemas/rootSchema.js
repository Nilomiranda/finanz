"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var graphql_1 = require("graphql");
var userSchema_1 = __importDefault(require("./userSchema"));
var UsersController_1 = __importDefault(require("../controllers/UsersController"));
var rootSchema = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: userSchema_1["default"],
            args: {
                id: {
                    type: graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
                }
            },
            resolve: function (parent, args, context, info) {
                return UsersController_1["default"].getUser(args.id);
            }
        }
    }
});
exports["default"] = rootSchema;
//# sourceMappingURL=rootSchema.js.map