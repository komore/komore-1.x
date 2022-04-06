import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformResource } from 'cdktf';

/**
 * Typed resource map
 *
 * @template ResourceId Resource identifier
 * @template ResourceType Resource type
 */
export type TypedResourceMap<ResourceId extends string, ResourceType extends TerraformResource> = ReadonlyRecord<
  ResourceId,
  ResourceType
>;
