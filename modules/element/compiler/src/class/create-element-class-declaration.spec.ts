import { factory } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementClassDeclaration } from './create-element-class-declaration';

describe('Create element class declaration', () => {
  it('works', () => {
    // given: an element definition
    const elementDefinition: ElementDefinition = {
      baseClassName: 'HTMLElement',
      className: 'TestElement',
      tagName: 'test-element'
    };
    // when:
    createElementClassDeclaration(factory, elementDefinition, undefined, undefined);
    // then:
    // TODO
  });
});
