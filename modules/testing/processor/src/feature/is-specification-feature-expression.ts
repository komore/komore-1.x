import { isTypeScriptCallExpression, isTypeScriptIdentifier, type TypeScriptExpressionStatement } from '@komore/tsc';

export function isSpecificationFeatureExpression(expressionStatement: TypeScriptExpressionStatement): boolean {
  const { expression, pos, end } = expressionStatement;
  if (isTypeScriptCallExpression(expression)) {
    const { expression: identifier } = expression;
    if (isTypeScriptIdentifier(identifier)) {
      const calledFunctionName = identifier.escapedText;
      console.log(`${pos}-${end}: ${calledFunctionName}`);
      if (calledFunctionName === 'feature') {
        return true;
      }
    }
  }

  return false;
}
