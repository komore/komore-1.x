import { factory } from 'typescript';
import type { ElementPropertyDefinition } from '../definition/element-property-definition';
import { createElementPropertySetAccessor } from './create-element-property-set-accessor';

describe('Create element property set accessor', () => {
  it('can create a set accessor declaration for a mandatory property', () => {
    given: 'An element property definition for a property that is not optional'
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: factory.createTypeReferenceNode(propertyType),
      isOptional: false,
      isReadOnly: false
    };
    when: 'creating the set accessor'
    const [declaration, identifier] = createElementPropertySetAccessor(factory, propertyDefinition);
    expect: 'a set accessor for a property that is not optional to have been created'
    expect(declaration).toBeSource(`
      set ${propertyName}(value: ${propertyType}) {
        this._kp.${propertyName}.s.next(value);
      }
    `);
    expect(identifier.text).toBe(propertyName);
  });

  it('can create a set accessor declaration for an optional property', () => {
    given: 'An element property definition for a property that is optional'
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: factory.createTypeReferenceNode(propertyType),
      isOptional: true,
      isReadOnly: false
    };
    when: 'creating the set accessor'
    const [declaration, identifier] = createElementPropertySetAccessor(factory, propertyDefinition);
    expect: 'a set accessor for a property that is optional to have been created'
    expect(declaration).toBeSource(`
      set ${propertyName}(value: ${propertyType} | undefined) {
        this._kp.${propertyName}.s.next(value);
      }
    `);
    expect(identifier.text).toBe(propertyName);
  });

  it('can create a set accessor declaration for a mandatory attribute-bound property', () => {
    given: 'An element property definition for a property that is not optional'
    const attributeName = 'test-attribute';
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: factory.createTypeReferenceNode(propertyType),
      isOptional: false,
      isReadOnly: false,
      boundAttributeName: attributeName
    };
    when: 'creating the set accessor'
    const [declaration, identifier] = createElementPropertySetAccessor(factory, propertyDefinition);
    expect: 'a set accessor for an attribute-bound property that is not optional to have been created'
    expect(declaration).toBeSource(`
      set ${propertyName}(value: ${propertyType}) {
        this.setAttribute("${attributeName}", value);
      }
    `);
    expect(identifier.text).toBe(propertyName);
  });

  it('can create a set accessor declaration for an optional attribute-bound property', () => {
    given: 'An element property definition for a property that is optional'
    const attributeName = 'test-attribute';
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: factory.createTypeReferenceNode(propertyType),
      isOptional: true,
      isReadOnly: false,
      boundAttributeName: attributeName
    };
    when: 'creating the set accessor'
    const [declaration, identifier] = createElementPropertySetAccessor(factory, propertyDefinition);
    expect: 'a set accessor for an attribute-bound property that is optional to have been created'
    expect(declaration).toBeSource(`
      set ${propertyName}(value: ${propertyType} | undefined) {
        if (value !== undefined) {
          this.setAttribute("${attributeName}", value);
        }
        else {
          this.removeAttribute("${attributeName}");
        }
      }
    `);
    expect(identifier.text).toBe(propertyName);
  });
});
