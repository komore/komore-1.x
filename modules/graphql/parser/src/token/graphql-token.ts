import { type GraphQLTokenKind } from './graphql-token-kind';
import { type GraphQLTokenLocation } from './graphql-token-location';
import { type GraphQLTokenPosition } from './graphql-token-position';

/**
 * GraphQL token
 */
export interface GraphQLToken {
  /**
   * Token kind
   */
  readonly kind: GraphQLTokenKind;
  /**
   * Token location
   */
  readonly location: GraphQLTokenLocation;
  /**
   * Token position
   */
  readonly position: GraphQLTokenPosition;
  /**
   * Siblings
   */
  readonly siblings: {
    /**
     * Next token
     */
    readonly next?: GraphQLToken;
    /**
     * Previous token
     */
    readonly previous?: GraphQLToken;
  };
  /**
   * Token value
   */
  readonly value?: string;
}
