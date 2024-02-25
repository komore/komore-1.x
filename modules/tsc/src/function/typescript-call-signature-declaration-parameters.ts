import { type TypeScriptParameterDeclaration } from '../parameter/typescript-parameter-declaration';
import { type TypeScriptTypeNode } from '../type/typescript-type-node';
import { type TypeScriptTypeParameterDeclaration } from '../type/typescript-type-parameter-declaration';

/**
 * TypeScript call signature declaration parameters
 */
export interface TypeScriptCallSignatureDeclarationParameters {
  /**
   * Parameters
   */
  readonly parameters: ReadonlyArray<TypeScriptParameterDeclaration>;
  /**
   * Return type
   */
  readonly returnType: TypeScriptTypeNode;
  /**
   * Type parameters
   */
  readonly typeParameters?: ReadonlyArray<TypeScriptTypeParameterDeclaration>;
}
