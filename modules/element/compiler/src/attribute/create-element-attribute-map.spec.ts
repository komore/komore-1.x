import { factory } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';
import { createElementAttributeMap } from './create-element-attribute-map';
import type { ElementAttributeDefinition } from './element-attribute-definition';

describe('Create element attribute map', () => {
  it('creates an element attribute map', () => {
    // given: an element and a list of attributes
    const elementDefinition: ElementDefinition = {
      baseClassName: 'HTMLElement',
      className: 'TestElement',
      tagName: 'test-element'
    };
    const attributeDefinitions: ReadonlyArray<ElementAttributeDefinition> = [
      {
        attributeName: 'test-attribute-1',
        attributeValueType: factory.createTypeReferenceNode('Attribute1Type'),
        defaultValue: factory.createIdentifier('undefined')
      },
      {
        attributeName: 'test-attribute-2',
        attributeValueType: factory.createTypeReferenceNode('Attribute2Type'),
        defaultValue: factory.createIdentifier('undefined')
      }
    ];
    // when: creating an element attribute type interface
    const interfaceDeclaration = createElementAttributeMap(factory, elementDefinition, attributeDefinitions);
    // then: the correct inteface declaration is created
    expect(interfaceDeclaration).toBeSource(`
      interface TestElementAttributeMap {
        "test-attribute-1": Attribute1Type;
        "test-attribute-2": Attribute2Type;
      }
    `);
  });
});
