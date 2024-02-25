import { type TypeScriptModifier } from '../modifier/typescript-modifier';
import { type TypeScriptTypeNode } from '../type/typescript-type-node';

/**
 * TypeScript property signature parameters
 */
export interface TypeScriptPropertySignatureParameters {
  /**
   * Modifiers
   */
  readonly modifiers: ReadonlyArray<TypeScriptModifier>;
  /**
   * Name
   */
  readonly name: string;
  /**
   * Whether the property is optional
   */
  readonly optional?: boolean;
  /**
   * Type
   */
  readonly type: TypeScriptTypeNode;
}
