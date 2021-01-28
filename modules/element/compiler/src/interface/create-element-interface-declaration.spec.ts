import { factory } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementInterfaceDeclaration } from './create-element-interface-declaration';

describe('Create element interface declaration', () => {
  it('creates a complete element interface declaration', () => {
    given: 'an element definition'
    const className = 'Testelement';
    const elementDefinition: ElementDefinition = {
      baseClassName: 'HTMLElement',
      className,
      tagName: 'test-element',
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
    const eventMap = 'TestElementEventMap';
    const eventMapType = factory.createTypeReferenceNode(eventMap);
    when: 'creating an element interface declaration'
    const elementInterfaceDeclaration = createElementInterfaceDeclaration(factory, elementDefinition, eventMapType);
    expect: 'an interface declaration with the properties, custom properties, methods and event listener methods to be created'
    expect(elementInterfaceDeclaration).toBeSource(`
      export interface ${className} extends HTMLElement {
        testProperty?: TestPropertyType;
        addEventListener<K extends keyof ${eventMap}>(type: K, listener: (this: ${className}, event: ${eventMap}[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof ${eventMap}>(type: K, listener: (this: ${className}, event: ${eventMap}[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
      }
    `);
  });
});
