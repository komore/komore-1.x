import { HTMLElement } from 'node-html-parser';
import { getElementClassName } from './get-element-class-name';

describe('Get element class name', () => {
  it('can get ', () => {});

  it('throws an error when more than one script element has a class attribute', () => {
    // given: two script elements with a class attribute
    const scriptElements = [
      new HTMLElement('script', { class: 'ElementClass1' }),
      new HTMLElement('script', { class: 'ElementClass2' })
    ];
    const templateElement = new HTMLElement('anything-here', {});
    // expect: an error to be thrown when attempting to get an element class name
    expect(() => getElementClassName(scriptElements, templateElement)).toThrowError(
      'more than one script element has a class attribute (ElementClass1, ElementClass2)'
    );
  });
});
