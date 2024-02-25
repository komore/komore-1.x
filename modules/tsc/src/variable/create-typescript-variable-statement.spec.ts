import { factory } from 'typescript';

import { feature } from '@komore/testing';

import { createTypeScriptVariableStatement } from './create-typescript-variable-statement';

feature('Create TypeScript variable statement', {
  'can create a variable statement with a string variable name'() {
    given: 'a variable name and initializer';
    const name = 'test';
    const initializer = factory.createNumericLiteral(42);

    when: 'creating a variable statement';
    const [variableStatement, identifier] = createTypeScriptVariableStatement(factory)({ name, initializer });

    expect: 'the correct variable statement to have been created';
    expect(variableStatement).toBeInlineSource('const test = 42;');
    identifier.text === name;
  },
  'can create a variable statement with an identifier variable name'() {
    given: 'a variable name and initializer';
    const name = factory.createIdentifier('test');
    const initializer = factory.createNumericLiteral(42);

    when: 'creating a variable statement';
    const [variableStatement, identifier] = createTypeScriptVariableStatement(factory)({ name, initializer });

    expect: 'the correct variable statement to have been created';
    expect(variableStatement).toBeInlineSource('const test = 42;');
    identifier.text === 'test';
  },
});
