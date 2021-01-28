import { factory } from 'typescript';
import type { ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementPropertyDeclaration } from './create-element-property-declaration';

describe('Create element property declaration', () => {
  it('can create a property signature', () => {
    given: 'an element property definition for a property that is neither optional or read-only'
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const elementPropertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: factory.createTypeReferenceNode(propertyType),
      isOptional: false,
      isReadOnly: false
    };
    when: 'creating the property signature'
    const [propertySignature, propertyIdentifier] = createElementPropertyDeclaration(factory, elementPropertyDefinition);
    expect: 'a signature for a property that is not optional or read-only to have been created'
    expect(propertySignature).toBeInlineSource(`${propertyName}: ${propertyType};`);
    expect(propertyIdentifier.text).toBe(propertyName);
  });

  it('can create a readonly property signature', () => {
    given: 'an element property definition for a property that is read-only'
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const elementPropertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: factory.createTypeReferenceNode(propertyType),
      isOptional: false,
      isReadOnly: true
    };
    when: 'creating the property signature'
    const [propertySignature, propertyIdentifier] = createElementPropertyDeclaration(factory, elementPropertyDefinition);
    expect: 'a signature for a property that is read-only to have been created'
    expect(propertySignature).toBeInlineSource(`readonly ${propertyName}: ${propertyType};`);
    expect(propertyIdentifier.text).toBe(propertyName);
  });

  it('can create an optional property signature', () => {
    given: 'an element property definition for a property that is optional'
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const elementPropertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: factory.createTypeReferenceNode(propertyType),
      isOptional: true,
      isReadOnly: false
    };
    when: 'creating the property signature'
    const [propertySignature, propertyIdentifier] = createElementPropertyDeclaration(factory, elementPropertyDefinition);
    expect: 'a signature for a property that is optional to have been created'
    expect(propertySignature).toBeInlineSource(`${propertyName}?: ${propertyType};`);
    expect(propertyIdentifier.text).toBe(propertyName);
  });

  it('can create an optional read-only property signature', () => {
    given: 'an element property definition for a property that is both optional and read-only'
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const elementPropertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: factory.createTypeReferenceNode(propertyType),
      isOptional: true,
      isReadOnly: true
    };
    when: 'creating the property signature'
    const [propertySignature, propertyIdentifier] = createElementPropertyDeclaration(factory, elementPropertyDefinition);
    expect: 'a signature for a property that is optional and read-only to have been created'
    expect(propertySignature).toBeInlineSource(`readonly ${propertyName}?: ${propertyType};`);
    expect(propertyIdentifier.text).toBe(propertyName);
  });
});
