import { factory } from 'typescript';
import type { ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementClassProperties } from './create-element-class-properties';

describe('Create element class properties', () => {
  it('works', () => {
    given: 'element property definitions';
    const propertyDefinitions: ReadonlyArray<ElementPropertyDefinition> = [
      {
        propertyName: 'testProperty1',
        propertyType: factory.createTypeReferenceNode('string'),
        isOptional: false,
        isReadOnly: false,
        boundAttributeName: 'test-attribute'
      },
      {
        propertyName: 'testProperty2',
        propertyType: factory.createTypeReferenceNode('boolean'),
        isOptional: true,
        isReadOnly: true
      }
    ];
    when: 'creating a list of accessor declarations';
    const accessorDeclarations = createElementClassProperties(factory, propertyDefinitions);
    expect: 'the correct access declarations to have been created, based on the property definitions';
    expect(accessorDeclarations.length).toBe(3);
    expect(accessorDeclarations[0]).toBeSource(`
      get testProperty1(): string {
        return this._kp.testProperty1.s.value;
      }
    `);
    expect(accessorDeclarations[1]).toBeSource(`
      set testProperty1(value: string) {
        this.setAttribute("test-attribute", value);
      }
    `);
    expect(accessorDeclarations[2]).toBeSource(`
      get testProperty2(): boolean | undefined {
        return this._kp.testProperty2.s.value;
      }
    `);
  });

  it('returns an empty list of accessor declaration when there are no property definitions', () => {
    given: 'an empty list of element property definitions';
    const propertyDefinitions: ReadonlyArray<ElementPropertyDefinition> = [];
    when: 'creating a list of accessor declarations';
    const accessorDeclarations = createElementClassProperties(factory, propertyDefinitions);
    expect: 'the list of accessor declaration to be empty';
    expect(accessorDeclarations.length).toBe(0);
  });
});
