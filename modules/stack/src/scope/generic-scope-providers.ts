import { type ReadonlyRecord } from '@komore/typescript';
import { type TerraformProvider } from 'cdktf';

/**
 * Generic scope providers
 */
export type GenericScopeProviders = ReadonlyRecord<string, TerraformProvider>;
