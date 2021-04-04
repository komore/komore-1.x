import { factory } from 'typescript';
import { ElementDefinition } from '../definition/element-definition';
import { createElementClassDeclaration } from './create-element-class-declaration';
import { createElementClassSource } from './create-element-class-source';

describe('Create element class source', () => {
  it('works', () => {
    given: 'an element definition';
    const baseClassName = 'HTMLElement';
    const className = 'TestElement';
    const tagName = 'test-element';
    const elementDefinition: ElementDefinition = {
      baseClassName,
      className,
      tagName
    };
    and: 'an element class declaration';
    const [classDeclaration] = createElementClassDeclaration(factory, elementDefinition, undefined, undefined);
    when: 'creating an element class source';
    const source = createElementClassSource(factory, classDeclaration);
    expect: 'the source to be correctly generated';
    expect(source).toBeSource(`
      class TestElement extends HTMLElement {
        static get observedAttributes() {
          return [] as const;
        }

        constructor() {
          super();
        }
      }
    `);
  });
});
