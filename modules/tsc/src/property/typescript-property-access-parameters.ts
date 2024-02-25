import { type TypeScriptExpression } from '../expression/typescript-expression';

/**
 * TypeScript property access parameters
 */
export interface TypeScriptPropertyAccessParameters {
  /**
   * Expression
   */
  readonly expression: string | TypeScriptExpression;
  /**
   * Property name with optional nested names
   */
  readonly propertyName: readonly [string, ...ReadonlyArray<string>];
}
