import { factory } from 'typescript';
import { createElementTemplateElement } from './create-element-template-element';

describe('Create template element', () => {
  it('creates a template element variable', () => {
    // when: creating an element's templateElement variable
    const [variableStatement, identifier] = createElementTemplateElement(factory);
    // then: the correct variable statement is created
    expect(variableStatement).toBeInlineSource('const templateElement = document.createElement("template");');
    expect(identifier.text).toBe('templateElement');
  });
});
