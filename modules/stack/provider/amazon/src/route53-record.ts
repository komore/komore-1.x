import { addResource } from '@komore/stack/provider';
import { Route53Record, type Route53RecordConfig } from './.gen/route53-record';

/**
 * Adds a Route53 record
 * @param resourceId Resource identifier
 * @param config Route53 record configuration
 * @returns Operator function that adds a Route53 record
 * @template ResourceId Resource identifier
 */
export function route53Record<ResourceId extends string>(resourceId: ResourceId, config: Route53RecordConfig) {
  return addResource(Route53Record, 'aws_route53_record', resourceId, config);
}
