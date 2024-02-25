import { type TypeScriptIdentifier } from '../typescript-identifier';
import { type TypeScriptTypeNode } from '../typescript-type-node';

/**
 * TypeScript extends keyof parameters
 */
export interface TypeScriptExtendsKeyofParameters {
  /**
   * Key name
   */
  readonly keyName: string | TypeScriptIdentifier;
  /**
   * Type
   */
  readonly type: TypeScriptTypeNode;
}
