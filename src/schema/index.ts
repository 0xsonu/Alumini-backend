import typeDefs from "./types";
import { resolvers } from "../resolver/resolvers";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
