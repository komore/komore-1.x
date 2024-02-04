import { type GraphQLSourceLocation } from './graphql-source-location';

/**
 * GraphQL source
 */
export interface GraphQLSource {
  readonly content: string;
  readonly name: string;
  readonly location: GraphQLSourceLocation;
}
