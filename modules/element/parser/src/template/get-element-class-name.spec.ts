import { getElementClassName } from './get-element-class-name';

describe('Get element class name', () => {
  it('gets the class name from the script class attribute', () => {
    // given: a script element with a class attribute
    const classAttributeValue = 'ElementClass';
    const scriptElement = createScriptElementWithClass(classAttributeValue);
    const templateElement = document.createElement('template-element-name');
    // when: getting the element class name
    const elementClassName = getElementClassName([scriptElement], templateElement);
    // then: the script class attribute value is returned
    expect(elementClassName).toBe(classAttributeValue);
  });

  it('throws an error when more than one script element has a class attribute', () => {
    // given: two script elements with a class attribute
    const scriptElements = [
      createScriptElementWithClass('ElementClass1'),
      createScriptElementWithClass('ElementClass2')
    ];
    const templateElement = document.createElement('template-element-name');
    // expect: an error to be thrown when attempting to get an element class name
    expect(() => getElementClassName(scriptElements, templateElement)).toThrowError(
      'more than one script element has a class attribute (ElementClass1, ElementClass2)'
    );
  });

  describe('falls back to getting the class name from the element name found in the template', () => {
    test('normal custom elements', () => {
      // given: a template element
      const templateElement = document.createElement('template-element-name');
      // when: getting the element class name
      const elementClassName = getElementClassName([], templateElement);
      // then: a pascal-case version of the element name is returned
      expect(elementClassName).toBe('TemplateElementName');
    });

    test('custom elements that extend a built-in element', () => {
      // given: a template element
      const templateElement = document.createElement('span');
      templateElement.setAttribute('is', 'template-element-name');
      // when: getting the element class name
      const elementClassName = getElementClassName([], templateElement);
      // then: a pascal-case version of the element name is returned
      expect(elementClassName).toBe('TemplateElementName');
    });

    it('is applicable when there is no class on the script elements', () => {
      // given: a script element with no class and template element
      const scriptElement = document.createElement('script');
      const templateElement = document.createElement('template-element-name');
      // when: getting the element class name
      const elementClassName = getElementClassName([scriptElement], templateElement);
      // then: a pascal-case version of the element name is returned
      expect(elementClassName).toBe('TemplateElementName');
    });

    it('throws an error when the element is neither a normal custom element or an extended built-in element', () => {
      // given: a standard element that is not extended via the is attribute
      const templateElement = document.createElement('span');
      // expect: getting an element class name to throw an error
      expect(() => getElementClassName([], templateElement)).toThrowError(
        'no element class name could be determined from template element "span"'
      );
    });
  });
});

function createScriptElementWithClass(className: string): HTMLScriptElement {
  const scriptElement = document.createElement('script');
  scriptElement.setAttribute('class', className);
  return scriptElement;
}
