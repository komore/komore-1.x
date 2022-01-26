import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { createMockElementCompilerContext } from '../test-helpers.spec';
import { createElementClassProperties } from './create-element-class-properties';

describe('Create element class properties', () => {
  it('can create a list of accessor declarations for an element class', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'element property definitions';
    const propertyDefinitions: ReadonlyArray<ElementPropertyDefinition> = [
      {
        propertyName: 'testProperty1',
        propertyType: context.factory.createTypeReferenceNode('string'),
        isOptional: false,
        isReadOnly: false,
        boundAttributeName: 'test-attribute'
      },
      {
        propertyName: 'testProperty2',
        propertyType: context.factory.createTypeReferenceNode('boolean'),
        isOptional: true,
        isReadOnly: true
      }
    ];
    and: 'a container name';
    const containerName = 'testContainer';
    when: 'creating a list of accessor declarations';
    const accessorDeclarations = createElementClassProperties(context, containerName, propertyDefinitions);
    expect: 'the correct accessor declarations to have been created, based on the property definitions';
    expect(accessorDeclarations.length).toBe(3);
    expect(accessorDeclarations[0]).toBeSource(`
      get testProperty1(): string {
        return this.${containerName}.testProperty1.value;
      }
    `);
    expect(accessorDeclarations[1]).toBeSource(`
      set testProperty1(value: string) {
        this.setAttribute("test-attribute", value);
      }
    `);
    expect(accessorDeclarations[2]).toBeSource(`
      get testProperty2(): boolean | undefined {
        return this.${containerName}.testProperty2.value;
      }
    `);
  });

  it('returns an empty list of accessor declaration when there are no property definitions', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'an empty list of element property definitions';
    const propertyDefinitions: ReadonlyArray<ElementPropertyDefinition> = [];
    and: 'a container name';
    const containerName = 'testContainer';
    when: 'creating a list of accessor declarations';
    const accessorDeclarations = createElementClassProperties(context, containerName, propertyDefinitions);
    expect: 'the list of accessor declarations to be empty';
    expect(accessorDeclarations.length).toBe(0);
  });
});
