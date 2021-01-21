import { getElementTagName } from './get-element-tag-name';

describe('Get element tag name', () => {
  it('returns the root tag name for custom elements', () => {
    // given: a template element
    const tagName = 'template-element-name';
    const templateElement = document.createElement(tagName);
    // when: getting the element tag name
    const elementName = getElementTagName(templateElement);
    // then: the root tag name is returned
    expect(elementName).toBe(tagName);
  });

  it('returns the is attribute value when extending built-in elements', () => {
    // given: a built-in HTML element
    const tagName = 'input';
    const customElementName = 'custom-input-element';
    const templateElement = document.createElement(tagName);
    templateElement.setAttribute('is', customElementName);
    // when: getting the element tag name
    const elementName = getElementTagName(templateElement);
    // then: the as attribute value is returned
    expect(elementName).toBe(customElementName);
  });

  it('throws an error when extending a built-in element without an as attribute', () => {
    // given: a built-in HTML element without an as attribute
    const tagName = 'input';
    const templateElement = document.createElement(tagName);
    // expect: getting the element tag name to throw an error
    expect(() => getElementTagName(templateElement)).toThrowError(
      `built-in ${tagName.toUpperCase()} element cannot be extended without specifying a custom element name`
    );
  });
});
