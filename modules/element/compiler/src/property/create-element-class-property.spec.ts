import { factory, SyntaxKind } from 'typescript';
import type { ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementClassProperty } from './create-element-class-property';

describe('Create element class property', () => {
  it('can create accessors for a property that is not read-only', () => {
    given: 'an element property definition for a property that is not read-only';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName: 'testProperty',
      propertyType: factory.createTypeReferenceNode('string'),
      isOptional: false,
      isReadOnly: false
    };
    when: 'creating the property';
    const accessors = createElementClassProperty(factory, propertyDefinition);
    expect: 'a get and a set accessors for a property to have been created';
    expect(accessors.length).toBe(2);
    expect(accessors[0].kind).toBe(SyntaxKind.GetAccessor);
    expect(accessors[1].kind).toBe(SyntaxKind.SetAccessor);
  });

  it('only creates a get accessor for a property that is read-only', () => {
    given: 'an element property definition for a property that is read-only';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName: 'testProperty',
      propertyType: factory.createTypeReferenceNode('string'),
      isOptional: false,
      isReadOnly: true
    };
    when: 'creating the property';
    const accessors = createElementClassProperty(factory, propertyDefinition);
    expect: 'only a get accessor to have been created';
    expect(accessors.length).toBe(1);
    expect(accessors[0].kind).toBe(SyntaxKind.GetAccessor);
  });
});
