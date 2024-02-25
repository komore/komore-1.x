import { factory } from 'typescript';

import { feature } from '@komore/testing';

import { createTypeScriptSuperCallExpressionStatement } from './create-typescript-super-call-expression-statement';

feature('Create TypeScript super call expression statement', () => {
  it('can create a super call with no arguments', () => {
    when: 'creating a super call without arguments';
    const expressionStatement = createTypeScriptSuperCallExpressionStatement(factory);
    expect: 'the correct expression to have been created';
    expect(expressionStatement).toBeInlineSource('super();');
  });

  it('can create a super call with arguments', () => {
    given: 'call arguments';
    const callArguments = [factory.createStringLiteral('test')];

    when: 'creating a super call with arguments';
    const expressionStatement = createTypeScriptSuperCallExpressionStatement(factory, callArguments);

    expect: 'the correct expression to have been created';
    expect(expressionStatement).toBeInlineSource('super("test");');
  });
});
