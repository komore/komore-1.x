/**
 * Route 53 delegation set
 */
export interface Route53DelegationSet {
  /**
   * Caller reference
   */
  readonly CallerReference?: string;
  /**
   * Name servers
   */
  readonly NameServers: ReadonlyArray<string>;
}
