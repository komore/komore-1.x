import { factory, SyntaxKind } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementInterfaceSource } from './create-element-interface-source';

describe('Create element interface source', () => {
  it('works', () => {
    given: 'TODO';
    const baseClassName = 'HTMLElement';
    const className = 'TestElement';
    const tagName = 'test-element';
    const functionName = 'testMethod';
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
      methodDefinitions: [
        {
          functionDeclaration: factory.createFunctionDeclaration(
            undefined,
            undefined,
            undefined,
            functionName,
            undefined,
            [
              factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                'param',
                undefined,
                factory.createKeywordTypeNode(SyntaxKind.StringKeyword)
              )
            ],
            factory.createKeywordTypeNode(SyntaxKind.NumberKeyword),
            factory.createBlock([], true)
          ),
          functionName
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
    when: 'creating an element interface source';
    const sourceFile = createElementInterfaceSource(factory, elementDefinition);
    then: 'a complete source with the event map, interface, constructor and tag name to be created';
    expect(sourceFile).toBeSource(`
      export interface ${className}EventMap extends HTMLElementEventMap {
        "test-event": CustomEvent<string>;
      }

      export interface ${className} extends ${baseClassName} {
        testProperty?: TestPropertyType;

        addEventListener<K extends keyof TestElementEventMap>(type: K, listener: (this: TestElement, event: TestElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof TestElementEventMap>(type: K, listener: (this: TestElement, event: TestElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;

        testMethod(param: string): number;
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
