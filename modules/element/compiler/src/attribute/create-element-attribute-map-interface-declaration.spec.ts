import { factory, SyntaxKind } from 'typescript';
import { type ElementAttributeDefinition } from '../definition/element-attribute-definition';
import { createElementAttributeMapInterfaceDeclaration } from './create-element-attribute-map-interface-declaration';

describe('Create element attribute map interface declaration', () => {
  it('creates an element attribute map interface declaration', () => {
    given: 'an interface name name and a list of attributes';
    const interfaceName = 'TestInterfaceName';
    const attributeDefinitions: ReadonlyArray<ElementAttributeDefinition> = [
      {
        attributeName: 'test-attribute-1',
        attributeValueType: 'string',
        attributeType: factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
        defaultValue: factory.createIdentifier('undefined'),
        optional: false
      },
      {
        attributeName: 'test-attribute-2',
        attributeValueType: 'number',
        attributeType: factory.createKeywordTypeNode(SyntaxKind.NumberKeyword),
        defaultValue: factory.createIdentifier('undefined'),
        optional: true
      }
    ];
    when: 'creating an element attribute type interface';
    const [interfaceDeclaration, identifier] = createElementAttributeMapInterfaceDeclaration(
      factory,
      interfaceName,
      attributeDefinitions
    );
    expect: 'an interface prefixed with the element class name and holding all attributes and their mapping is created';
    expect(interfaceDeclaration).toBeSource(`
      interface ${interfaceName} {
        'test-attribute-1': string;
        'test-attribute-2': number;
      }
    `);
    expect(identifier.text).toBe(interfaceName);
  });
});
