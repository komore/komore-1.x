import { type TerraformLocal } from 'cdktf';
import { type Types } from './types';

/**
 * Typed local
 * @template LocalTypeName Local type name
 */
export interface TypedLocal<LocalTypeName extends keyof Types> {
  readonly id: string;
  readonly terraformLocal: TerraformLocal;
  readonly type: LocalTypeName;
}
