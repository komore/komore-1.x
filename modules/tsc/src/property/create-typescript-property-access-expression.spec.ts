import { factory } from 'typescript';

import { feature } from '@komore/testing';

import { createTypeScriptPropertyAccessExpression } from './create-typescript-property-access-expression';

feature('Create TypeScript property access expression', {
  'can create a simple property access'() {
    given: 'a base and a property name';
    const baseName = 'base';
    const propertyName = ['property'] as const;
    const expression = factory.createIdentifier(baseName);

    when: 'creating a property access';
    const propertyAccess = createTypeScriptPropertyAccessExpression(factory)({ expression, propertyName });

    then: 'a correct property access expression is generated';
    expect(propertyAccess).toBeInlineSource(`${baseName}.${propertyName}`);
  },
  'can create a nested property access'() {
    given: 'a base and property names';
    const baseName = 'base';
    const propertyNameA = 'propertyA';
    const propertyNameB = 'propertyB';
    const propertyNameC = 'propertyC';
    const propertyName = [propertyNameA, propertyNameB, propertyNameC] as const;
    const expression = factory.createIdentifier(baseName);

    when: 'creating a property access';
    const propertyAccess = createTypeScriptPropertyAccessExpression(factory)({ expression, propertyName });

    then: 'a correct property access expression is generated';
    expect(propertyAccess).toBeInlineSource(`${baseName}.${propertyNameA}.${propertyNameB}.${propertyNameC}`);
  },
});
