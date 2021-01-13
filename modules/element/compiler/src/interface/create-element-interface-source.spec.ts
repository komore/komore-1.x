import { factory } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementInterfaceSource } from './create-element-interface-source';

describe('Create element interface source', () => {
  it('works', () => {
    // given:
    const elementDefinition: ElementDefinition = {
      baseClassName: 'HTMLElement',
      className: 'TestElement',
      tagName: 'test-element',
      eventDefinitions: [
        {
          eventName: 'test-event',
          eventDetailsType: factory.createTypeReferenceNode('string')
        }
      ]
    };
    // when:
    const sourceFile = createElementInterfaceSource(factory, elementDefinition);
    // then: the correct source to be generated
    expect(sourceFile).toBeSource(`
      export interface TestElementEventMap extends HTMLElementEventMap {
        "test-event": CustomEvent<string>;
      }

      export interface TestElement extends HTMLElement {
        testProperty: string;

        testMethod(param: string): number;

        addEventListener<K extends keyof TestElementEventMap>(type: K, listener: (this: TestElement, event: TestElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof TestElementEventMap>(type: K, listener: (this: TestElement, event: TestElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
      }

      declare var TestElement: {
        new(): TestElement;
      };

      declare global {
        interface HTMLElementTagNameMap {
          'test-element': TestElement;
        }
      }
    `);
  });
});
