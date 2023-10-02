/**
 * Command-line interface route definition
 */
export interface CliRouteDefinition<Path extends string> {
  /**
   * Path
   */
  readonly path: Path;
}
