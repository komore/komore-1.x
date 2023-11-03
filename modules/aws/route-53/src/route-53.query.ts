import { type GetHostedZoneCommand, type ListHostedZonesCommand } from '@aws-sdk/client-route-53';

import { awsQueryProperties, createAwsQueryType } from '@komore/aws';

import { route53Domain } from './route-53.domain';

/**
 * Route 53 query
 */
export const route53Query = createAwsQueryType(route53Domain, {
  /**
   * Returns a hosted zone
   *
   * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html GetHostedZone}
   */
  getHostedZone: awsQueryProperties<GetHostedZoneCommand>(),
  /**
   * Lists hosted zones
   *
   * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html ListHostedZones}
   */
  listHostedZones: awsQueryProperties<ListHostedZonesCommand>(),
});
