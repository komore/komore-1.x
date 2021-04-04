import { expectTypeOf } from 'expect-type';
import { factory, SyntaxKind } from 'typescript';
import type { ElementPropertyAttributeBoundDefinition } from './element-property-attribute-bound-definition';
import type { ElementPropertyDefinition } from './element-property-definition';
import { isElementPropertyAttributeBound } from './is-element-property-attribute-bound';

describe('Is element property attribute bound', () => {
  it('returns false when an element property is not bound to an attribute', () => {
    given: 'an element property definition without a bound attribute name';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName: 'testProperty',
      propertyType: factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
      isOptional: false,
      isReadOnly: false
    };
    expect: 'false to be returned';
    expect(isElementPropertyAttributeBound(propertyDefinition)).toBe(false);
  });

  it('returns true when an element property is bound to an attribute', () => {
    given: 'an element property definition with a bound attribute name';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName: 'testProperty',
      propertyType: factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
      isOptional: false,
      isReadOnly: false,
      boundAttributeName: 'test-attribute'
    };
    expect: 'true to be returned';
    expect(isElementPropertyAttributeBound(propertyDefinition)).toBe(true);
    if (isElementPropertyAttributeBound(propertyDefinition)) {
      expectTypeOf(propertyDefinition).toEqualTypeOf<ElementPropertyAttributeBoundDefinition>();
    }
  });
});
