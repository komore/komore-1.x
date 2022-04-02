import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformResource } from 'cdktf';

/**
 * Typed resource map
 * @param ResourceId Resource identifier
 * @param ResourceType Resource type
 */
export type TypedResourceMap<
  ResourceId extends string,
  ResourceType extends TerraformResource = TerraformResource
> = ReadonlyRecord<ResourceId, ResourceType>;
