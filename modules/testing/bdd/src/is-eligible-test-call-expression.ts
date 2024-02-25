import {
  type CallExpression,
  isCallExpression,
  isIdentifier,
  isPropertyAccessExpression,
  type SourceFile,
} from 'typescript';

/**
 * Tests whether a call expression is considered a test call
 *
 * ```ts
 * describe('', fn);
 * describe.each('', fn);
 * describe.only('', fn);
 * describe.only.each('', fn);
 * describe.skip('', fn);
 * describe.skip.each()('', fn);
 * test('', fn);
 * test.concurrent('', fn);
 * test.concurrent.each()('', fn);
 * test.concurrent.only.each()('', fn);
 * test.concurrent.skip.each()('', fn);
 * test.each()('', fn, timeout?);
 * test.only('', fn, timeout?)
 * test.skip('', fn);
 * test.skip.each()('', fn);
 * test.todo('');
 * ```
 *
 * Note: `it` is also eligible, as an alias for `test`
 *
 * @param sourceFile Source file
 * @param callExpression Call expression
 * @returns true if the call expression is considered a test call
 */
export function isEligibleTestCallExpression(sourceFile: SourceFile, callExpression: CallExpression): boolean {
  const expression = callExpression.expression;
  const eligibleFunctionNames = ['describe', 'it', 'test'];
  const eligiblePropertyFunctionNames = [
    'describe.only',
    'describe.skip',
    'it.concurrent',
    'it.only',
    'it.skip',
    'it.todo',
    'test.concurrent',
    'test.only',
    'test.skip',
    'test.todo',
  ];
  const eligibleEachNames = [
    'describe',
    'describe.only',
    'describe.skip',
    'it.concurrent',
    'it.concurrent.only',
    'it.concurrent.skip',
    'it',
    'it.only',
    'it.skip',
    'test.concurrent',
    'test.concurrent.only',
    'test.concurrent.skip',
    'test',
    'test.only',
    'test.skip',
  ];

  if (isCallExpression(expression)) {
    const innerExpression = expression.expression;
    if (isPropertyAccessExpression(innerExpression)) {
      const functionName = innerExpression.getText(sourceFile);
      return eligibleEachNames.some(eligibleEachName => `${eligibleEachName}.each` === functionName);
    }
  } else if (isPropertyAccessExpression(expression)) {
    const functionName = expression.getText(sourceFile);
    return eligiblePropertyFunctionNames.includes(functionName);
  } else if (isIdentifier(expression)) {
    const functionName = expression.getText(sourceFile);
    return eligibleFunctionNames.includes(functionName);
  }

  return false;
}
