import { type TypeScriptTypeNode } from '../type/typescript-type-node';

/**
 * TypeScript type mapping
 */
export interface TypeScriptTypeMapping {
  /**
   * Name
   */
  readonly name: string;
  /**
   * Type
   */
  readonly type: TypeScriptTypeNode;
}
