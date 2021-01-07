import { HTMLElement } from 'node-html-parser';
import { getElementClassName } from './get-element-class-name';

describe('Get element class name', () => {
  it('gets the class name from the script class attribute', () => {
    // given: a script element with a class attribute
    const classAttributeValue = 'ElementClass';
    const scriptElement = new HTMLElement('script', { class: classAttributeValue });
    const templateElement = new HTMLElement('template-element-name', {});
    // when: getting the element class name
    const elementClassName = getElementClassName([scriptElement], templateElement);
    // then: the script class attribute value is returned
    expect(elementClassName).toBe(classAttributeValue);
  });

  it('throws an error when more than one script element has a class attribute', () => {
    // given: two script elements with a class attribute
    const scriptElements = [
      new HTMLElement('script', { class: 'ElementClass1' }),
      new HTMLElement('script', { class: 'ElementClass2' })
    ];
    const templateElement = new HTMLElement('template-element-name', {});
    // expect: an error to be thrown when attempting to get an element class name
    expect(() => getElementClassName(scriptElements, templateElement)).toThrowError(
      'more than one script element has a class attribute (ElementClass1, ElementClass2)'
    );
  });

  it('gets the class name from the template root element when no script class attribute is provided', () => {
    // given: a template element
    const templateElement = new HTMLElement('template-element-name', {});
    // when: getting the element class name
    const elementClassName = getElementClassName([], templateElement);
    // then: a pascal-case version of the element name is returned
    expect(elementClassName).toBe('TemplateElementName');
  });
});
