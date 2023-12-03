import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { SyntaxKind } from 'typescript';
import { createMockElementCompilerContext } from '../test-helpers.spec';
import { createElementClassProperty } from './create-element-class-property';

describe('Create element class property', () => {
  it('can create accessors for a property that is not read-only', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'an element property definition for a property that is not read-only';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName: 'testProperty',
      propertyType: context.factory.createTypeReferenceNode('string'),
      isOptional: false,
      isReadOnly: false
    };
    and: 'a container name';
    const containerName = 'testContainer';
    when: 'creating the property';
    const accessors = createElementClassProperty(context, containerName, propertyDefinition);
    expect: 'a get and a set accessors for a property to have been created';
    expect(accessors.length).toBe(2);
    expect(accessors[0].kind).toBe(SyntaxKind.GetAccessor);
    expect(accessors[1].kind).toBe(SyntaxKind.SetAccessor);
  });

  it('only creates a get accessor for a property that is read-only', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'an element property definition for a property that is read-only';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName: 'testProperty',
      propertyType: context.factory.createTypeReferenceNode('string'),
      isOptional: false,
      isReadOnly: true
    };
    and: 'a container name';
    const containerName = 'testContainer';
    when: 'creating the property';
    const accessors = createElementClassProperty(context, containerName, propertyDefinition);
    expect: 'only a get accessor to have been created';
    expect(accessors.length).toBe(1);
    expect(accessors[0].kind).toBe(SyntaxKind.GetAccessor);
  });
});
