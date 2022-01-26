import { lastValueFrom } from '@komore/reactive';
import { parseTemplateElements } from './parse-template-elements';

describe('Parse template elements', () => {
  it('properly parses a template element', async () => {
    // given: a template element
    const templateElement = document.createElement('test-element');
    // when: parsing the template element
    const parsedTemplateElement$ = parseTemplateElements([templateElement], []);
    const parsedTemplateElement = await lastValueFrom(parsedTemplateElement$);
    // then: the parsed template element has the correct properties
    expect(parsedTemplateElement.baseClassName).toBe('HTMLElement');
    expect(parsedTemplateElement.baseTagName).toBeUndefined();
    expect(parsedTemplateElement.className).toBe('TestElement');
    expect(parsedTemplateElement.tagName).toBe('test-element');
    expect(parsedTemplateElement.parsedAttributes.length).toBe(0);
    expect(parsedTemplateElement.templateElement).toBe(templateElement);
  });

  it('properly parses a template element that extends a built-in element', async () => {
    // given: a template element extending a built-in element
    const templateElement = document.createElement('span');
    templateElement.setAttribute('is', 'test-span');
    // when: parsing the template element
    const parsedTemplateElement$ = parseTemplateElements([templateElement], []);
    const parsedTemplateElement = await lastValueFrom(parsedTemplateElement$);
    // then: the parsed template element has the correct properties
    expect(parsedTemplateElement.baseClassName).toBe('HTMLSpanElement');
    expect(parsedTemplateElement.baseTagName).toBe('span');
    expect(parsedTemplateElement.className).toBe('TestSpan');
    expect(parsedTemplateElement.tagName).toBe('test-span');
    expect(parsedTemplateElement.parsedAttributes.length).toBe(1);
    expect(parsedTemplateElement.templateElement).toBe(templateElement);
  });

  it('throws an error when no root template elements are found', () => {
    // expect: an error to be thrown when parsing an empty list of elements
    expect(() => parseTemplateElements([], [])).toThrowError('an element template must have a root element');
  });

  it('throws an error when multiple template elements are found', () => {
    // given: a list with multiple eligible template elements source with multiple root template elements
    const templateElement1 = document.createElement('test-element1');
    const templateElement2 = document.createElement('test-element2');
    const templateElements = [templateElement1, templateElement2];
    // expect: an error to be thrown when parsing a list of elements with more than one element
    expect(() => parseTemplateElements(templateElements, [])).toThrowError(
      'an element template cannot have more than one root element (found: test-element1, test-element2)'
    );
  });
});
