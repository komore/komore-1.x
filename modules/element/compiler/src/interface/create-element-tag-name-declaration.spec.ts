import { factory } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementTagNameDeclaration } from './create-element-tag-name-declaration';

describe('Create element tag name declaration', () => {
  it('works', () => {
    // given: an element definition
    const elementDefinition: ElementDefinition = {
      baseClassName: 'HTMLElement',
      className: 'TestElement',
      tagName: 'test-element'
    };
    // when: creating an element tag name declaration
    const moduleDeclaration = createElementTagNameDeclaration(factory, elementDefinition);
    // then: the module declaration updates the interface with a new entry for the element
    expect(moduleDeclaration).toBeSource(`
      declare global {
        interface HTMLElementTagNameMap {
          "test-element": TestElement;
        }
      }
    `);
  });
});
