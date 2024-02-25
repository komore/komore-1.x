import { type TypeScriptBlock } from '../block/typescript-block';
import { type TypeScriptExpression } from '../expression/typescript-expression';
import { type TypeScriptParameterDeclaration } from '../parameter/typescript-parameter-declaration';
import { type TypeScriptTypeNode } from '../type/typescript-type-node';

/**
 * TypeScript arrow function parameters
 */
export interface TypeScriptArrowFunctionParameters {
  /**
   * Function body
   */
  readonly body: TypeScriptBlock | TypeScriptExpression;
  /**
   * Function parameters
   */
  readonly parameters: ReadonlyArray<TypeScriptParameterDeclaration>;
  /**
   * Function return type
   */
  readonly returnType?: TypeScriptTypeNode;
}
