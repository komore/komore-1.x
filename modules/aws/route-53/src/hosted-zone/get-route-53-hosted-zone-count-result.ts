/**
 * Get Route 53 hosted zone count result
 *
 * @see {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZoneCount.html#API_GetHostedZoneCount_ResponseElements GetHostedZoneCount Response Elements}
 */
export interface GetRoute53HostedZoneCountResult {
  /**
   * Hosted zone count
   */
  readonly HostedZoneCount: number;
}
