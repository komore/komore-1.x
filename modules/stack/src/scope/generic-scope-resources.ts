import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformResource } from 'cdktf';
import { type TypedResourceMap } from '../type/typed-resource-map';

/**
 * Generic scope resources
 */
export type GenericScopeResources = ReadonlyRecord<string, TypedResourceMap<string, TerraformResource>>;
