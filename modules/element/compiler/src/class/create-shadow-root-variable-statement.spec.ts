import { factory } from 'typescript';
import { createShadowRootVariableStatement } from './create-shadow-root-variable-statement';

describe('Create shadow root variable statement', () => {
  it('creates a shadow root variable statement and identifier', () => {
    given: 'a variable name and a shadow root mode'
    const variableName = 'testVariable';
    const mode = 'open';
    when: 'creating a shadow root variable statement'
    const [variableStatement, variableId] = createShadowRootVariableStatement(factory, variableName, mode);
    then: 'the correct variable statement and identifier are created'
    expect(variableStatement).toBeInlineSource(`const ${variableName} = this.attachShadow({ mode: "${mode}" });`);
    expect(variableId.text).toBe(variableName);
  });
});
