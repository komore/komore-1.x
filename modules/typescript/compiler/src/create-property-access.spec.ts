import { factory } from 'typescript';
import { createPropertyAccess } from './create-property-access';

describe('Create property access', () => {
  it('can create a simple property access', () => {
    given: 'a base and a property name';
    const baseName = 'base';
    const propertyName = 'property';
    const expression = factory.createIdentifier(baseName);
    when: 'creating a property access';
    const propertyAccess = createPropertyAccess(factory, expression, propertyName);
    then: 'a correct property access expression is generated';
    expect(propertyAccess).toBeInlineSource(`${baseName}.${propertyName}`);
  });

  it('can create a nested property access', () => {
    given: 'a base and property names';
    const baseName = 'base';
    const propertyNameA = 'propertyA';
    const propertyNameB = 'propertyB';
    const propertyNameC = 'propertyC';
    const expression = factory.createIdentifier(baseName);
    when: 'creating a property access';
    const propertyAccess = createPropertyAccess(factory, expression, propertyNameA, propertyNameB, propertyNameC);
    then: 'a correct property access expression is generated';
    expect(propertyAccess).toBeInlineSource(`${baseName}.${propertyNameA}.${propertyNameB}.${propertyNameC}`);
  });
});
