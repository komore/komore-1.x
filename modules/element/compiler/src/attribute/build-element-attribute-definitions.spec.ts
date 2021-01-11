import { HTMLElement } from 'node-html-parser';
import { factory } from 'typescript';
import { buildElementAttributeDefinitions } from './build-element-attribute-definitions';

describe('Build element attribute definitions', () => {
  it('supports template elements that do not declare attributes', () => {
    // given: a template element without attributes
    const templateElement = new HTMLElement('test-element', {});
    // when: building an element's attribute definitions
    const attributeDefinitions = buildElementAttributeDefinitions(factory, templateElement);
    // then: an empty list is returned
    expect(attributeDefinitions.length).toBe(0);
  });

  it('supports template elements with attributes', () => {
    // given: a template element without attributes
    const templateElement = new HTMLElement('test-element', {}, 'test-attribute');
    // when: building an element's attribute definitions
    const attributeDefinitions = buildElementAttributeDefinitions(factory, templateElement);
    // then: an empty list is returned
    expect(attributeDefinitions.length).toBe(1);
    const attributeDefinition = attributeDefinitions[0];
    expect(attributeDefinition.attributeName).toBe('test-attribute');
  });
});
