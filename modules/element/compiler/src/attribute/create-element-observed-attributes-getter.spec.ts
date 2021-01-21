import { factory } from 'typescript';
import { createElementObservedAttributesGetter } from './create-element-observed-attributes-getter';
import type { ElementAttributeDefinition } from './element-attribute-definition';

describe('Create element observed attributes getter', () => {
  it('creates a static getter that returns the list of observed attributes', () => {
    // given: a list of attribute definitions
    const attributeDefinitions: ReadonlyArray<ElementAttributeDefinition> = [
      {
        attributeName: 'test-a',
        attributeValueType: factory.createTypeReferenceNode('string'),
        defaultValue: factory.createIdentifier('undefined'),
        optional: false
      },
      {
        attributeName: 'test-b',
        attributeValueType: factory.createTypeReferenceNode('string'),
        defaultValue: factory.createIdentifier('undefined'),
        optional: false
      }
    ];
    // when: creating the observed attributs getts
    const accessorDeclaration = createElementObservedAttributesGetter(factory, attributeDefinitions);
    // then: the correct declaration is created
    expect(accessorDeclaration).toBeSource(`
      static get observedAttributes() {
        return [
          "test-a",
          "test-b"
        ] as const;
      }
    `);
  });
});
