import { factory } from 'typescript';
import { type ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementInterfaceProperties } from './create-element-interface-properties';

describe('Create element interface properties', () => {
  it('can create a list of property signatures for an element interface', () => {
    given: 'element property definitions';
    const propertyDefinitions: ReadonlyArray<ElementPropertyDefinition> = [
      {
        propertyName: 'testProperty1',
        propertyType: factory.createTypeReferenceNode('string'),
        isOptional: false,
        isReadOnly: false
      },
      {
        propertyName: 'testProperty2',
        propertyType: factory.createTypeReferenceNode('boolean'),
        isOptional: true,
        isReadOnly: true
      }
    ];
    when: 'creating property signatures for an element interface';
    const propertySignatures = createElementInterfaceProperties(factory, propertyDefinitions);
    expect: 'the correct property signatures to have been created, based on the property definitions';
    expect(propertySignatures.length).toBe(2);
    expect(propertySignatures[0]).toBeInlineSource('testProperty1: string;');
    expect(propertySignatures[1]).toBeInlineSource('readonly testProperty2?: boolean;');
  });

  it('returns an empty list of property signatures when there are no property definitions', () => {
    given: 'an empty list of element property definitions';
    const propertyDefinitions: ReadonlyArray<ElementPropertyDefinition> = [];
    when: 'creating property signatures for an element interface';
    const propertySignatures = createElementInterfaceProperties(factory, propertyDefinitions);
    expect: 'the list of property signatures to be empty';
    expect(propertySignatures.length).toBe(0);
  });
});
