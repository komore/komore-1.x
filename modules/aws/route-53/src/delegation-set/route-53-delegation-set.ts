/**
 * Route 53 delegation set
 */
export interface Route53DelegationSet {
  /**
   *
   */
  readonly CallerReference: string;
  /**
   * Name servers
   */
  readonly NameServers: ReadonlyArray<string>;
}
