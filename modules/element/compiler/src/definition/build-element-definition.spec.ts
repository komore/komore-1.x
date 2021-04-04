import type { ParsedSource } from '@komore/element/parser';
import { factory } from 'typescript';
import { buildElementDefinition } from './build-element-definition';

describe('Build element description', () => {
  it('works', () => {
    given: 'a parsed source';
    const parsedSource: ParsedSource = {
      parsedElementTemplate: {
        baseClassName: 'HTMLElement',
        className: 'TestElement',
        tagName: 'test-element',
        parsedAttributes: [],
        templateElement: document.createElement('test-element')
      },
      scriptElements: [],
      styleElements: [],
      parsedCustomPropertyDefinitions: []
    };
    when: 'building the element definition';
    const elementDefinition = buildElementDefinition(factory, parsedSource);
    expect: 'a correct element definition to have been built';
    expect(elementDefinition.baseClassName).toBe(parsedSource.parsedElementTemplate.baseClassName);
    expect(elementDefinition.baseTagName).toBe(parsedSource.parsedElementTemplate.baseTagName);
    expect(elementDefinition.className).toBe(parsedSource.parsedElementTemplate.className);
    expect(elementDefinition.tagName).toBe(parsedSource.parsedElementTemplate.tagName);
  });
});
