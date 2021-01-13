import { factory } from 'typescript';
import { createVariableStatement } from './create-variable-statement';

describe('Create variable statement', () => {
  it('can create a variable statement with a string variable name', () => {
    // given: a variable name and initializer
    const name = 'test';
    const initializer = factory.createNumericLiteral(42);
    // when: creating a variable statement
    const [variableStatement, identifier] = createVariableStatement(factory, name, initializer);
    // then: the correct variable statement is created
    expect(variableStatement).toBeInlineSource('const test = 42;');
    expect(identifier.text).toBe(name);
  });

  it('can create a variable statement with an identifier variable name', () => {
    // given: a variable name and initializer
    const name = factory.createIdentifier('test');
    const initializer = factory.createNumericLiteral(42);
    // when: creating a variable statement
    const [variableStatement, identifier] = createVariableStatement(factory, name, initializer);
    // then: the correct variable statement is created
    expect(variableStatement).toBeInlineSource('const test = 42;');
    expect(identifier.text).toBe('test');
  });
});
