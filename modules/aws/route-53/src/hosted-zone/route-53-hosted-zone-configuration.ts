/**
 * Route 53 hosted zone configuration
 */
export interface Route53HostedZoneConfiguration {
  /**
   * Comment
   */
  readonly Comment?: string;
  /**
   * Whether the hosted zone is private
   *
   * @note Defaults to `false`
   */
  readonly PrivateZone?: boolean;
}
