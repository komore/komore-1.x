import { route53 } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds a Route53 record
 * @param resourceId Resource identifier
 * @param config Route53 record configuration
 * @returns Operator function that adds a Route53 record
 * @template ResourceId Resource identifier
 */
export function route53Record<ResourceId extends string>(resourceId: ResourceId, config: route53.Route53RecordConfig) {
  return addResource(route53.Route53Record, 'aws_route53_record', resourceId, config);
}
