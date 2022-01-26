import { factory } from 'typescript';
import { createShadowRootVariableStatement } from './create-shadow-root-variable-statement';

describe('Create shadow root variable statement', () => {
  it('creates a shadow root variable statement and identifier', () => {
    given: 'a variable name and a shadow root mode';
    const variableName = 'testVariable';
    const mode = 'open';
    when: 'creating a shadow root variable statement';
    const [variableStatement, identifier] = createShadowRootVariableStatement(factory, variableName, mode);
    expect: 'the correct variable statement and identifier to be created';
    expect(variableStatement).toBeInlineSource(`const ${variableName} = this.attachShadow({ mode: "${mode}" });`);
    expect(identifier.text).toBe(variableName);
  });
});
