import { mergeResolvers } from "@graphql-tools/merge";
import { anotherHelloResolvers } from "./anotherHello";
import { helloResolvers } from "./hello";

export const resolvers = mergeResolvers([
  anotherHelloResolvers,
  helloResolvers,
]);
