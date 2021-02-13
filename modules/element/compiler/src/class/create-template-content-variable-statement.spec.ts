import { factory } from 'typescript';
import { createTemplateContentVariableStatement } from './create-template-content-variable-statement';

describe('Create template content variable statement', () => {
  it('creates a template content variable statement assigning a deep-cloned node', () => {
    given: 'a variable name and template element identifier'
    const variableName = 'testVariable';
    const templateElement = 'testTemplateElement';
    const templateElementId = factory.createIdentifier(templateElement);
    when: 'creating a template content variable statement'
    const [statement, identifier] = createTemplateContentVariableStatement(factory, variableName, templateElementId);
    expect: 'a variable statement initializing with a deep-cloned content node'
    expect(statement).toBeInlineSource(`const ${variableName} = ${templateElement}.content.cloneNode(true);`);
    expect(identifier.text).toBe(variableName);
  });
});
