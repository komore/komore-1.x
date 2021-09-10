import { factory } from 'typescript';
import { createElementObservedAttributesGetAccessor } from './create-element-observed-attributes-get-accessor';
import type { ElementAttributeDefinition } from '../definition/element-attribute-definition';

describe('Create element observed attributes get accessor', () => {
  it('creates a static getter that returns the list of observed attributes', () => {
    given: 'a list of attribute definitions';
    const attributeDefinitions: ReadonlyArray<ElementAttributeDefinition> = [
      {
        attributeName: 'test-a',
        attributeValueType: 'string',
        attributeType: factory.createTypeReferenceNode('string'),
        defaultValue: factory.createIdentifier('undefined'),
        optional: false
      },
      {
        attributeName: 'test-b',
        attributeValueType: 'string',
        attributeType: factory.createTypeReferenceNode('string'),
        defaultValue: factory.createIdentifier('undefined'),
        optional: false
      }
    ];
    when: 'creating the observed attributes getter';
    const [declaration, identifier] = createElementObservedAttributesGetAccessor(factory, attributeDefinitions);
    expect: 'a get accessor declaration returning all attributes to be created';
    expect(declaration).toBeSource(`
      static get observedAttributes() {
        return [
          'test-a',
          'test-b'
        ] as const;
      }
    `);
    expect(identifier.text).toBe('observedAttributes');
  });
});
