import { HTMLElement } from 'node-html-parser';
import { getElementBaseClassInfo } from './get-element-base-class-info';

describe('Get element base class info', () => {
  it('returns HTMLElement when defining a custom element', () => {
    // given: a standard HTML element
    const tagName = 'test-element';
    const templateElement = new HTMLElement(tagName, {});
    // when: getting the element base class name
    const { baseClassName, baseTagName } = getElementBaseClassInfo(templateElement);
    // then: the correct class name is returned
    expect(baseClassName).toBe('HTMLElement');
    expect(baseTagName).toBeUndefined();
  });

  it('returns a built-in HTML element class when extending a standard element', () => {
    // given: a built-in HTML element
    const tagName = 'p';
    const templateElement = new HTMLElement(tagName, {});
    // when: getting the element base class name
    const { baseClassName, baseTagName } = getElementBaseClassInfo(templateElement);
    // then: the correct class name is returned
    expect(baseClassName).toBe('HTMLParagraphElement');
    expect(baseTagName).toBe('p');
  });

  it('throws an error when extending an unknown standard element', () => {
    // given: a template element with an unknown standard tag name
    const tagName = 'unknowntest';
    const templateElement = new HTMLElement(tagName, {});
    // expect: an error to be thrown when getting the element base class name
    expect(() => getElementBaseClassInfo(templateElement)).toThrowError(`unknown base element ${tagName}`);
  });
});
