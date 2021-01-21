import { factory } from 'typescript';
import { ElementAttributeDefinition } from '../definition/element-attribute-definition';
import { createElementAttributeSubjects } from './create-element-attribute-subjects';

describe('Create element attribute subjects', () => {
  it('works', () => {
    // given: an attribute map
    const attributeMap = factory.createInterfaceDeclaration(
      undefined,
      undefined,
      'TestElementAttributeMap',
      undefined,
      undefined,
      []
    );
    // and: attribute definitions
    const attributeDefinitions: ReadonlyArray<ElementAttributeDefinition> = [
      {
        attributeName: 'test-attr-1',
        attributeValueType: 'string',
        attributeType: factory.createTypeReferenceNode('string'),
        defaultValue: factory.createIdentifier('undefined'),
        optional: false
      },
      {
        attributeName: 'test-attr-2',
        attributeValueType: 'number',
        attributeType: factory.createTypeReferenceNode('number'),
        defaultValue: factory.createNumericLiteral(42),
        optional: false
      }
    ];
    // when: creating the element attribute subjects
    const propertyDeclaration = createElementAttributeSubjects(factory, attributeMap, attributeDefinitions);
    // then:
    expect(propertyDeclaration).toBeSource(`
      private readonly _ka: ElementAttributeSubjectMap<TestElementAttributeMap> = {
        "test-attr-1": _cEAS<string>(),
        "test-attr-2": _cEAS<number>()
      };
    `);
  });
});
