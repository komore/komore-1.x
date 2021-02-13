import { factory, SyntaxKind } from 'typescript';
import { ElementAttributeDefinition } from '../definition/element-attribute-definition';
import { createElementAttributeSubjects } from './create-element-attribute-subjects';

describe('Create element attribute subjects', () => {
  it('can create an element attribute subject map', () => {
    given: 'an attribute map';
    const attributeMap = factory.createInterfaceDeclaration(
      undefined,
      undefined,
      'TestElementAttributeMap',
      undefined,
      undefined,
      []
    );
    and: 'attribute definitions';
    const attributeDefinitions: ReadonlyArray<ElementAttributeDefinition> = [
      {
        attributeName: 'test-attr-1',
        attributeValueType: 'string',
        attributeType: factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
        defaultValue: factory.createIdentifier('undefined'),
        optional: false
      },
      {
        attributeName: 'test-attr-2',
        attributeValueType: 'number',
        attributeType: factory.createKeywordTypeNode(SyntaxKind.NumberKeyword),
        defaultValue: factory.createNumericLiteral(42),
        optional: false
      }
    ];
    when: 'creating the element attribute subjects';
    const [propertyDeclaration, propertyIdentifier] = createElementAttributeSubjects(
      factory,
      attributeMap,
      attributeDefinitions
    );
    expect: 'a private property declaring each attribute subject with the correct type';
    expect(propertyDeclaration).toBeSource(`
      private readonly _ka: ElementAttributeSubjectMap<TestElementAttributeMap> = {
        "test-attr-1": _cEAS<string>(),
        "test-attr-2": _cEAS<number>()
      };
    `);
    expect(propertyIdentifier.text).toBe('_ka');
  });
});
