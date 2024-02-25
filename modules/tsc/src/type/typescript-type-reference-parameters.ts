import { type TypeScriptTypeNode } from './typescript-type-node';

/**
 * TypeSCript type reference parameters
 */
export interface TypeScriptTypeReferenceParameters {
  /**
   * Type name
   */
  readonly name: string;
  /**
   * Type arguments
   */
  readonly typeArguments?: ReadonlyArray<TypeScriptTypeNode>;
}
