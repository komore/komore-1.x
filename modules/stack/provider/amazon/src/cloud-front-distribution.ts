import { addResource } from '@komore/stack/provider';
import { CloudfrontDistribution, type CloudfrontDistributionConfig } from './.gen/cloudfront-distribution';

/**
 * Adds a CloudFront distribution
 * @param resourceId Resource identifier
 * @param config CloudFront distribution configuration
 * @returns Operator function that adds a CloudFront distribution
 * @template ResourceId Resource identifier
 */
export function cloudFrontDistribution<ResourceId extends string>(
  resourceId: ResourceId,
  config: CloudfrontDistributionConfig
) {
  return addResource(CloudfrontDistribution, 'aws_cloudfront_distribution', resourceId, config);
}
