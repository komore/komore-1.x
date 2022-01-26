import { iam } from '@cdktf/provider-aws';
import { addResource } from '@komore/stack/provider';

/**
 * Adds an IAM group resource
 * @param resourceId Resource identifier
 * @param config IAM group configuration
 * @returns Operator function that adds an IAM group resource
 * @template ResourceId Resource identifier
 */
export function iamGroup<ResourceId extends string>(resourceId: ResourceId, config: iam.IamGroupConfig) {
  return addResource(iam.IamGroup, 'aws_iam_group', resourceId, config);
}
