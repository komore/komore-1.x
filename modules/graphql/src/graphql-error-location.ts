/**
 * GraphQL error location
 */
export interface GraphQLErrorLocation {
  /**
   * Column number
   */
  readonly column: number;
  /**
   * Line number
   */
  readonly line: number;
}
