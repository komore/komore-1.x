import { factory } from 'typescript';
import { createElementSetTemplateHtml } from './create-element-set-template-html';

describe('Create element set template HTML', () => {
  it('creates a statement that sets an HTML source for a template element', () => {
    given: 'a template element identifier and HTML source';
    const templateElementId = factory.createIdentifier('templateElement');
    const html = '<div>Test</div>';
    when: 'creating a set template HTML statement';
    const expressionStatement = createElementSetTemplateHtml(factory, templateElementId, html);
    expect: 'the correct expression statement to be created';
    expect(expressionStatement).toBeInlineSource('templateElement.innerHTML = "<div>Test</div>";');
  });
});
