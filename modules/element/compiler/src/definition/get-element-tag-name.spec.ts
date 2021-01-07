import { HTMLElement } from 'node-html-parser';
import { getElementTagName } from './get-element-tag-name';

describe('Get element tag name', () => {
  it('returns the root tag name for custom elements', () => {
    // given: a template element
    const templateElement = new HTMLElement('template-element-name', {});
    // when: getting the element tag name
    const elementName = getElementTagName(templateElement);
    // then: the root tag name is returned
    expect(elementName).toBe('template-element-name');
  });

  it('returns the as attribute value when extending built-in elements', () => {
    // given: a built-in HTML element
    const tagName = 'input';
    const templateElement = new HTMLElement(tagName, {}, 'as="custom-input-element"');
    // when: getting the element tag name
    const elementName = getElementTagName(templateElement);
    // then: the as attribute value is returned
    expect(elementName).toBe('custom-input-element');
  });

  it('throws an error when extending a built-in element without an as attribute', () => {
    // given: a built-in HTML element without an as attribute
    const tagName = 'input';
    const templateElement = new HTMLElement(tagName, {});
    // expect: getting the element tag name to throw an error
    expect(() => getElementTagName(templateElement)).toThrowError(
      `built-in ${tagName} element cannot be extended without specifying a custom element name`
    );
  });
});
