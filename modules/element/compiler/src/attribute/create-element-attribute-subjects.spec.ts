import { factory } from 'typescript';
import { createElementAttributeSubjects } from './create-element-attribute-subjects';
import { ElementAttributeDefinition } from './element-attribute-definition';

describe('Create element attribute subjects', () => {
  it('works', () => {
    // given: an attribute map and attribute definitions
    const attributeMap = factory.createInterfaceDeclaration(
      undefined,
      undefined,
      'TestElementAttributeMap',
      undefined,
      undefined,
      []
    );
    const attributeDefinitions: ReadonlyArray<ElementAttributeDefinition> = [
      {
        attributeName: 'test-attr-1',
        attributeValueType: factory.createTypeReferenceNode('string'),
        defaultValue: factory.createIdentifier('undefined')
      },
      {
        attributeName: 'test-attr-2',
        attributeValueType: factory.createTypeReferenceNode('number'),
        defaultValue: factory.createNumericLiteral(42)
      }
    ];
    // when: creating the element attribute subjects
    const propertyDeclaration = createElementAttributeSubjects(factory, attributeMap, attributeDefinitions);
    // then:
    expect(propertyDeclaration).toBeSource(`
      private readonly _k_attrs: ElementAttributeSubjectMap<TestElementAttributeMap> = {
        "test-attr-1": new BehaviorSubject<string>(undefined),
        "test-attr-2": new BehaviorSubject<number>(42)
      };
    `);
  });
});
