import { factory } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementInterfaceDeclaration } from './create-element-interface-declaration';

describe('Create element interface declaration', () => {
  it('creates a complete element interface declaration', () => {
    // given: an element definition
    const elementDefinition: ElementDefinition = {
      baseClassName: 'HTMLElement',
      className: 'TestElement',
      tagName: 'test-element'
    };
    const eventMapType = factory.createTypeReferenceNode('TestElementEventMap');
    // when: creating an element interface declaration
    const elementInterfaceDeclaration = createElementInterfaceDeclaration(factory, elementDefinition, eventMapType);
    // then: the correct interface declaration is created
    expect(elementInterfaceDeclaration).toBeSource(`
      export interface TestElement extends HTMLElement {
        addEventListener<K extends keyof TestElementEventMap>(type: K, listener: (this: TestElement, event: TestElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof TestElementEventMap>(type: K, listener: (this: TestElement, event: TestElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
      }
    `);
  });
});
