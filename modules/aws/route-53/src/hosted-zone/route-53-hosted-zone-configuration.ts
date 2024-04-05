/**
 * Route 53 hosted zone configuration
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_HostedZoneConfig.html HostedZoneConfig}
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
