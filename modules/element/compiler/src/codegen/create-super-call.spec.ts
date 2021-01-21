import { factory } from 'typescript';
import { createSuperCall } from './create-super-call';

describe('Create super call', () => {
  it('can create a super call with no arguments', () => {
    // when: creating a super call without arguments
    const expressionStatement = createSuperCall(factory);
    // then: the correct expression is created
    expect(expressionStatement).toBeInlineSource('super();');
  });

  it('can create a super call with arguments', () => {
    // given: call arguments
    const callArguments = [
      factory.createStringLiteral('test')
    ];
    // when: creating a super call with arguments
    const expressionStatement = createSuperCall(factory, callArguments);
    // then: the correct expression is created
    expect(expressionStatement).toBeInlineSource('super("test");');
  });
});
