import { factory, SyntaxKind } from 'typescript';
import { type ElementAttributeDefinition } from '../definition/element-attribute-definition';
import { createElementAttributeMap } from './create-element-attribute-map';

describe('Create element attribute map', () => {
  it('creates an element attribute map', () => {
    given: 'an element class name and a list of attributes';
    const elementClassName = 'TestElement';
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
    const [interfaceDeclaration, interfaceIdentifier] = createElementAttributeMap(
      factory,
      elementClassName,
      attributeDefinitions
    );
    expect: 'an interface prefixed with the element class name and holding all attributes and their mapping is created';
    expect(interfaceDeclaration).toBeSource(`
      interface ${elementClassName}AttributeMap {
        "test-attribute-1": string;
        "test-attribute-2": number;
      }
    `);
    expect(interfaceIdentifier.text).toBe(`${elementClassName}AttributeMap`);
  });
});
