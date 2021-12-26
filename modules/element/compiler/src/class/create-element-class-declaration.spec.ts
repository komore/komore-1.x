import { factory } from 'typescript';
import { type ElementDefinition } from '../definition/element-definition';
import { createElementClassDeclaration } from './create-element-class-declaration';

describe('Create element class declaration', () => {
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
    when: 'creating an element class declaration';
    const [declaration, identifier] = createElementClassDeclaration(factory, elementDefinition, undefined, undefined);
    expect: 'a correct class declaration to have been declared';
    expect(declaration).toBeSource(`
      class ${className} extends ${baseClassName} {
        static get observedAttributes() {
          return [] as const;
        }
        constructor() {
          super();
        }
      }
    `);
    expect(identifier.text).toBe(elementDefinition.className);
  });
});
