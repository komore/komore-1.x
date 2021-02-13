import { factory, SyntaxKind } from 'typescript';
import type { ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementPropertySignature } from './create-element-property-signature';

describe('Create element property signature', () => {
  const propertyName = 'testProperty';
  const propertyType = 'string';

  function createPropertyDefinition(isOptional: boolean, isReadOnly: boolean): ElementPropertyDefinition {
    return {
      propertyName,
      propertyType: factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
      isOptional,
      isReadOnly
    };
  }

  it('can create a property signature', () => {
    given: 'an element property definition for a property that is neither optional or read-only';
    const propertyDefinition = createPropertyDefinition(false, false);
    when: 'creating the property signature';
    const [propertySignature, propertyIdentifier] = createElementPropertySignature(factory, propertyDefinition);
    expect: 'a signature for a property that is not optional or read-only to have been created';
    expect(propertySignature).toBeInlineSource(`${propertyName}: ${propertyType};`);
    expect(propertyIdentifier.text).toBe(propertyName);
  });

  it('can create a readonly property signature', () => {
    given: 'an element property definition for a property that is read-only';
    const propertyDefinition = createPropertyDefinition(false, true);
    when: 'creating the property signature';
    const [propertySignature, propertyIdentifier] = createElementPropertySignature(factory, propertyDefinition);
    expect: 'a signature for a property that is read-only to have been created';
    expect(propertySignature).toBeInlineSource(`readonly ${propertyName}: ${propertyType};`);
    expect(propertyIdentifier.text).toBe(propertyName);
  });

  it('can create an optional property signature', () => {
    given: 'an element property definition for a property that is optional';
    const propertyDefinition = createPropertyDefinition(true, false);
    when: 'creating the property signature';
    const [propertySignature, propertyIdentifier] = createElementPropertySignature(factory, propertyDefinition);
    expect: 'a signature for a property that is optional to have been created';
    expect(propertySignature).toBeInlineSource(`${propertyName}?: ${propertyType};`);
    expect(propertyIdentifier.text).toBe(propertyName);
  });

  it('can create an optional read-only property signature', () => {
    given: 'an element property definition for a property that is both optional and read-only';
    const propertyDefinition = createPropertyDefinition(true, true);
    when: 'creating the property signature';
    const [propertySignature, propertyIdentifier] = createElementPropertySignature(factory, propertyDefinition);
    expect: 'a signature for a property that is optional and read-only to have been created';
    expect(propertySignature).toBeInlineSource(`readonly ${propertyName}?: ${propertyType};`);
    expect(propertyIdentifier.text).toBe(propertyName);
  });
});
