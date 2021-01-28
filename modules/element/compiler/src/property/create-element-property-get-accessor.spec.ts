import { factory } from 'typescript';
import type { ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementPropertyGetAccessor } from './create-element-property-get-accessor';

describe('Create element property get accessor', () => {
  it('can create a get accessor declaration for a mandatory property', () => {
    given: 'an element property definition for a property that is mandatory'
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: factory.createTypeReferenceNode(propertyType),
      isOptional: false,
      isReadOnly: false
    };
    when: 'creating the get accessor'
    const [declaration, identifier] = createElementPropertyGetAccessor(factory, propertyDefinition);
    expect: 'a get accessor for a property that is not optional to have been created'
    expect(declaration).toBeSource(`
      get ${propertyName}(): ${propertyType} {
        return this._kp.${propertyName}.s.value;
      }
    `);
    expect(identifier.text).toBe(propertyName);
  });

  it('can create a get accessor declaration for an optional property', () => {
    given: 'an element property definition for a property that is optional'
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: factory.createTypeReferenceNode(propertyType),
      isOptional: true,
      isReadOnly: false
    };
    when: 'creating the get accessor'
    const [declaration, identifier] = createElementPropertyGetAccessor(factory, propertyDefinition);
    expect: 'a get accessor for a property that is not optional to have been created'
    expect(declaration).toBeSource(`
      get ${propertyName}(): ${propertyType} | undefined {
        return this._kp.${propertyName}.s.value;
      }
    `);
    expect(identifier.text).toBe(propertyName);
  });
});
