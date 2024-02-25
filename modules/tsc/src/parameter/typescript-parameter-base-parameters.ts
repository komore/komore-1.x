import { type TypeScriptExpression } from '../expression/typescript-expression';
import { type TypeScriptTypeNode } from '../type/typescript-type-node';

/**
 * TypeScript parameter base parameters
 */
export interface TypeScriptParameterBaseParameters {
  /**
   * Initializer expression
   */
  readonly initializer?: TypeScriptExpression;
  /**
   * Whether the parameter is optional
   */
  readonly optional?: boolean;
  /**
   * Parameter type
   *
   * @note When using a list of types, a union type is created
   */
  readonly type: TypeScriptTypeNode | ReadonlyArray<TypeScriptTypeNode>;
}
