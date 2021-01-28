import { factory } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementInterfaceSource } from './create-element-interface-source';

describe('Create element interface source', () => {
  it('works', () => {
    given: 'TODO'
    const baseClassName = 'HTMLElement';
    const className = 'TestElement';
    const tagName = 'test-element';
    const elementDefinition: ElementDefinition = {
      baseClassName,
      className,
      tagName,
      attributeDefinitions: [],
      eventDefinitions: [
        {
          eventName: 'test-event',
          eventDetailsType: factory.createTypeReferenceNode('string')
        }
      ],
      propertyDefinitions: [
        {
          propertyName: 'testProperty',
          propertyType: factory.createTypeReferenceNode('TestPropertyType'),
          isOptional: true,
          isReadOnly: false
        }
      ]
    };
    when: 'TODO'
    const sourceFile = createElementInterfaceSource(factory, elementDefinition);
    then: 'a complete source with the event map, interface, constructor and tag name to be created'
    expect(sourceFile).toBeSource(`
      export interface ${className}EventMap extends HTMLElementEventMap {
        "test-event": CustomEvent<string>;
      }

      export interface ${className} extends ${baseClassName} {
        testProperty?: TestPropertyType;

        testMethod(param: string): number;

        addEventListener<K extends keyof TestElementEventMap>(type: K, listener: (this: TestElement, event: TestElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof TestElementEventMap>(type: K, listener: (this: TestElement, event: TestElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
      }

      declare const ${className}: {
        new (): ${className};
      };

      declare global {
        interface HTMLElementTagNameMap {
          "${tagName}": ${className};
        }
      }
    `);
  });
});
