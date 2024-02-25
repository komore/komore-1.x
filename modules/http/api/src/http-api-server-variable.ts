/**
 * HTTP API server variable
 */
export interface HttpApiServerVariable {
  /**
   * Default value
   */
  readonly default?: string;
  /**
   * Description
   */
  readonly description: string;
  /**
   * Target
   */
  readonly target: 'header' | 'url';
  // TODO: enum
}
