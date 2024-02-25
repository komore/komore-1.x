import { type TypeScriptExpression } from '../expression/typescript-expression';
import { type TypeScriptIdentifier } from '../identifier/typescript-identifier';
import { type TypeScriptTypeNode } from '../type/typescript-type-node';

/**
 * TypeScript variable statement parameters
 */
export interface TypeScriptVariableStatementParameters {
  /**
   * Initializer expression
   */
  readonly initializer: TypeScriptExpression;
  /**
   * Variable name
   */
  readonly name: string | TypeScriptIdentifier;
  /**
   * Variable type
   */
  readonly type?: TypeScriptTypeNode;
}
