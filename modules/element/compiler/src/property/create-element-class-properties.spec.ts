import { factory } from 'typescript';
import { ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementClassProperties } from './create-element-class-properties';

describe('Create element class properties', () => {
  it('works', () => {
    given: 'element property definitions'
    const propertyDefinitions: ReadonlyArray<ElementPropertyDefinition> = [

    ];
    when: 'creating a list of accessor declarations'
    const accessorDeclarations = createElementClassProperties(factory, propertyDefinitions);
    expect: 'xx'
    expect(accessorDeclarations.length).toBe(propertyDefinitions.length);
    console.log('weeeee', accessorDeclarations);
    expect(accessorDeclarations[0]).toBeInlineSource('xokepfkopkoepqkfeofkeOPFKQEOKFQEOFEQKOFEQKOyz');
    expect(accessorDeclarations[1]).toBeInlineSource('abc');
  });

  it('returns an empty list of accessor declaration when there are no property definitions', () => {
    given: 'an empty list of element property definitions'
    const propertyDefinitions: ReadonlyArray<ElementPropertyDefinition> = [];
    when: 'creating a list of accessor declarations'
    const accessorDeclarations = createElementClassProperties(factory, propertyDefinitions);
    expect: 'the list of accessor declaration to be empty'
    expect(accessorDeclarations.length).toBe(0);
  });
});
