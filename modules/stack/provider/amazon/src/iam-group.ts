import { addResource } from '@komore/stack/provider';
import type { IamGroupConfig } from './.gen/iam-group';
import { IamGroup } from './.gen/iam-group';

/**
 * Adds an IAM group resource
 * @param resourceId Resource identifier
 * @param config IAM group configuration
 * @returns Operator function that adds an IAM group resource
 * @template ResourceId Resource identifier
 */
export function iamGroup<ResourceId extends string>(resourceId: ResourceId, config: IamGroupConfig) {
  return addResource(IamGroup, 'aws_iam_group', resourceId, config);
}
