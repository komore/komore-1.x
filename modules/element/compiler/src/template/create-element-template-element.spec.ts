import { factory } from 'typescript';
import { createElementTemplateElement } from './create-element-template-element';

describe('Create template element', () => {
  it('creates a template element variable', () => {
    given: 'a template element variable name';
    const variableName = 'templateElement';
    when: 'creating a template element variable';
    const [variableStatement, identifier] = createElementTemplateElement(factory, variableName);
    expect: 'the correct variable statement to be created';
    expect(variableStatement).toBeInlineSource(`const ${variableName} = document.createElement('template');`);
    expect(identifier.text).toBe('templateElement');
  });
});
