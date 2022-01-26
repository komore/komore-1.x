import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { factory } from 'typescript';
import { createElementPropertyType } from './create-element-property-type';

describe('Create element property type', () => {
  it('can create a property type for a mandatory property', () => {
    given: 'a property definition for a mandatory property';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName: 'testProperty',
      propertyType: factory.createTypeReferenceNode(propertyType),
      isOptional: false,
      isReadOnly: false
    };
    when: 'creating the element property type';
    const type = createElementPropertyType(factory, propertyDefinition);
    expect: 'the type to be the property type';
    expect(type).toBeInlineSource(propertyType);
  });

  it('can create a property type for an optional property', () => {
    given: 'a property definition for a optional property';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName: 'testProperty',
      propertyType: factory.createTypeReferenceNode(propertyType),
      isOptional: true,
      isReadOnly: false
    };
    when: 'creating the element property type';
    const type = createElementPropertyType(factory, propertyDefinition);
    expect: 'the type to be a union of the property type and undefined';
    expect(type).toBeInlineSource(`${propertyType} | undefined`);
  });
});
