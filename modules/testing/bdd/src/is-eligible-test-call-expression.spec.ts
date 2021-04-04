import type { CallExpression, SourceFile } from 'typescript';
import { isEligibleTestCallExpression } from './is-eligible-test-call-expression';

describe('Is eligible test function', () => {
  const names = [
    'describe',
    'describe.each()',
    'describe.only',
    'describe.only.each()',
    'describe.skip',
    'describe.skip.each()',
    'it',
    'it.concurrent',
    'it.concurrent.each()',
    'it.concurrent.only.each()',
    'it.concurrent.skip.each()',
    'it.each()',
    'it.only',
    'it.only.each()',
    'it.skip',
    'it.skip.each()',
    'it.todo',
    'test',
    'test.concurrent',
    'test.concurrent.each()',
    'test.concurrent.only.each()',
    'test.concurrent.skip.each()',
    'test.each()',
    'test.only',
    'test.only.each()',
    'test.skip',
    'test.skip.each()',
    'test.todo'
  ];

  it.each(names)('considers calls to %p to be eligible', functionName => {
    given: 'a test call expression';
    const [sourceFile, callExpression] = createCallExpression(`${functionName}('test', () => {})`);
    when: 'testing whether the call expression is eligible';
    const eligible = isEligibleTestCallExpression(sourceFile, callExpression);
    expect: 'the expression to be eligible';
    expect(eligible).toBe(true);
  });

  it('ignores calls to other function names', () => {
    given: 'a call expression';
    const [sourceFile, callExpression] = createCallExpression('fn("test", () => {})');
    when: 'testing whether the call expression is eligible';
    const eligible = isEligibleTestCallExpression(sourceFile, callExpression);
    expect: 'the expression not to be eligible';
    expect(eligible).toBe(false);
  });
});

function createCallExpression(sourceText: string): [SourceFile, CallExpression] {
  const sourceFile = createTestSource(sourceText);
  const expressionStatement = sourceFile.statements[0];
  const callExpression = expressionStatement.getChildAt(0, sourceFile) as CallExpression;
  return [sourceFile, callExpression];
}
