import { cloudfront } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds a CloudFront distribution
 * @param resourceId Resource identifier
 * @param config CloudFront distribution configuration
 * @returns Operator function that adds a CloudFront distribution
 * @template ResourceId Resource identifier
 */
export function cloudFrontDistribution<ResourceId extends string>(
  resourceId: ResourceId,
  config: cloudfront.CloudfrontDistributionConfig
) {
  return addResource(cloudfront.CloudfrontDistribution, 'aws_cloudfront_distribution', resourceId, config);
}
