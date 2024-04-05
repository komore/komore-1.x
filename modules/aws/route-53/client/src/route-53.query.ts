import { route53Domain } from '@komore/aws/route-53';
import { createQueryType, queryProperties } from '@komore/query';

/**
 * Route 53 query
 */
export const route53Query = createQueryType(route53Domain, {
  /**
   * Returns a hosted zone
   *
   * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html GetHostedZone}
   */
  getHostedZone: queryProperties<GetHostedZoneCommand>(),
  /**
   * Lists hosted zones
   *
   * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html ListHostedZones}
   */
  listHostedZones: queryProperties<ListHostedZonesCommand>(),
});
