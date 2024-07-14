const {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLScalarType,
} = require("graphql");

// Gender enum type
const GenderEnumType = new GraphQLEnumType({
  name: "GenderEnumType",
  description: " Enum type for gender",
  values: {
    males: {
      value: "males",
    },
    female: {
      value: "female",
    },
  },
});

// user type
const UserType = new GraphQLObjectType({
  name: "User",
  description: "It represents a single user",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    gander: {
      type: GenderEnumType,
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLString,
    },
  }),
});

// Root query Type
const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    users: {
      type: new GraphQLList(new GraphQLNonNull(UserType)),
      resolve: () => {
        return Users;
      },
    },
  }),
});

module.exports = {
  UserType,
  RootQueryType,
};
