import { isTypeScriptCallExpression, isTypeScriptIdentifier, type TypeScriptExpressionStatement } from '@komore/tsc';

/**
 * Creates a function that tests whether an expression statement is a feature expression
 *
 * ```ts
 * import { feature } from '@komore/testing';
 *
 * feature('name (with block)', {});
 * feature('name (with arrow function)', () => {});
 * ```
 *
 * @param expressionStatement Expression statement
 * @returns true if the expression statement is a feature expression
 */
export function isSpecificationFeatureExpression(expressionStatement: TypeScriptExpressionStatement): boolean {
  const { expression, pos, end } = expressionStatement;
  if (isTypeScriptCallExpression(expression)) {
    const { expression: identifier } = expression;
    if (isTypeScriptIdentifier(identifier)) {
      const { escapedText: calledFunctionName } = identifier;
      console.log(`${pos}-${end}: ${calledFunctionName}`);
      // TODO: check based on the import name/source rather than the called function name
      if (calledFunctionName === 'feature') {
        return true;
      }
    }
  }

  return false;
}
