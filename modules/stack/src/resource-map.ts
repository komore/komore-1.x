import { type TerraformResource } from 'cdktf';

/**
 * Resource map
 * @param ResourceId Resource identifier
 * @param ResourceType Resource type
 */
export type ResourceMap<ResourceId extends string, ResourceType extends TerraformResource = TerraformResource> = Record<
  ResourceId,
  ResourceType
>;
