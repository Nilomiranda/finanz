"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var koa_1 = __importDefault(require("koa"));
var mongoose_1 = __importDefault(require("mongoose"));
var koa_router_1 = __importDefault(require("koa-router"));
var apollo_server_koa_1 = require("apollo-server-koa");
var graphql_1 = require("graphql");
var rootSchema_1 = __importDefault(require("./src/schemas/rootSchema"));
var rootMutation_1 = __importDefault(require("./src/mutations/rootMutation"));
var app = new koa_1["default"]();
var router = new koa_router_1["default"]();
mongoose_1["default"].connect('mongodb://localhost/finanz?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose_1["default"].connection;
db.on('error', function () {
    console.log('Error when connecting to database');
});
db.once('open', function () {
    console.log('Successfully connected to database');
});
var typeDefs = apollo_server_koa_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    hello: String\n  }\n"], ["\n  type Query {\n    hello: String\n  }\n"])));
// Provide resolver functions for your schema fields
var resolvers = {
    Query: {
        hello: function () { return 'Hello world!'; }
    }
};
var apolloServer = new apollo_server_koa_1.ApolloServer({
    playground: true,
    schema: new graphql_1.GraphQLSchema({
        query: rootSchema_1["default"],
        mutation: rootMutation_1["default"]
    })
});
apolloServer.applyMiddleware({ app: app });
// const testSchema = new mongoose.Schema({
//   name: String,
// });
//
// const test = mongoose.model('Test', testSchema);
//
// const newTest = new test({ name: 'Danilo' });
//
// newTest.save();
app.use(router.routes());
app.listen(3000, function () {
    console.log("\uD83D\uDE80 Server ready at http://localhost:3000" + apolloServer.graphqlPath);
});
var templateObject_1;
//# sourceMappingURL=index.js.map