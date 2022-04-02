import { cloudfront } from '@cdktf/provider-aws';
import { resource, typedResource, type GenericScope, type ScopedConfiguration } from '@komore/stack';

/**
 * Adds a CloudFront distribution resource
 * @param resourceId Resource identifier
 * @param config CloudFront distribution configuration
 * @template ScopeType Scope type
 * @template ResourceId Resource identifier
 */
export function cloudFrontDistribution<ScopeType extends GenericScope, ResourceId extends string>(
  resourceId: ResourceId,
  config: ScopedConfiguration<ScopeType, cloudfront.CloudfrontDistributionConfig>
) {
  return resource(
    resourceId,
    typedResource('aws_cloudfront_distribution', cloudfront.CloudfrontDistribution),
    config
  );
}
