import { factory } from 'typescript';
import { createAppendCallExpression } from './create-append-call-expression';

describe('Create append call expression', () => {
  it('can create an append call expression', () => {
    given: 'an object and child identifiers';
    const objectIdentifier = factory.createIdentifier('testObject');
    const childIdentifier = factory.createIdentifier('testChild');
    when: 'creating an append call expression';
    const expressionStatement = createAppendCallExpression(factory, objectIdentifier, childIdentifier);
    expect: 'the correct expression statement to have been created';
    expect(expressionStatement).toBeInlineSource('testObject.append(testChild);');
  });
});
