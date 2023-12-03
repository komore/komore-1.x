import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { createMockElementCompilerContext } from '../../test-helpers.spec';
import { createElementPropertySetAccessor } from './create-element-property-set-accessor';

describe('Create element property set accessor', () => {
  it('can create a set accessor declaration for a mandatory property', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'an element property definition for a property that is not optional';
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: context.factory.createTypeReferenceNode(propertyType),
      isOptional: false,
      isReadOnly: false
    };
    and: 'a container name';
    const containerName = 'testContainer';
    when: 'creating the set accessor';
    const [accessorDeclaration, identifier] = createElementPropertySetAccessor(
      context,
      containerName,
      propertyDefinition
    );
    expect: 'a set accessor for a property that is not optional to have been created';
    expect(accessorDeclaration).toBeSource(`
      set ${propertyName}(value: ${propertyType}) {
        this.${containerName}.${propertyName}.next(value);
      }
    `);
    expect(identifier.text).toBe(propertyName);
  });

  it('can create a set accessor declaration for an optional property', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'an element property definition for a property that is optional';
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: context.factory.createTypeReferenceNode(propertyType),
      isOptional: true,
      isReadOnly: false
    };
    and: 'a container name';
    const containerName = 'testContainer';
    when: 'creating the set accessor';
    const [accessorDeclaration, identifier] = createElementPropertySetAccessor(
      context,
      containerName,
      propertyDefinition
    );
    expect: 'a set accessor for a property that is optional to have been created';
    expect(accessorDeclaration).toBeSource(`
      set ${propertyName}(value: ${propertyType} | undefined) {
        this.${containerName}.${propertyName}.next(value);
      }
    `);
    expect(identifier.text).toBe(propertyName);
  });

  it('can create a set accessor declaration for a mandatory attribute-bound property', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'an element property definition for a property that is not optional';
    const attributeName = 'test-attribute';
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: context.factory.createTypeReferenceNode(propertyType),
      isOptional: false,
      isReadOnly: false,
      boundAttributeName: attributeName
    };
    and: 'a container name';
    const containerName = 'testContainer';
    when: 'creating the set accessor';
    const [accessorDeclaration, identifier] = createElementPropertySetAccessor(
      context,
      containerName,
      propertyDefinition
    );
    expect: 'a set accessor for an attribute-bound property that is not optional to have been created';
    expect(accessorDeclaration).toBeSource(`
      set ${propertyName}(value: ${propertyType}) {
        this.setAttribute("${attributeName}", value);
      }
    `);
    expect(identifier.text).toBe(propertyName);
  });

  it('can create a set accessor declaration for an optional attribute-bound property', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'an element property definition for a property that is optional';
    const attributeName = 'test-attribute';
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: context.factory.createTypeReferenceNode(propertyType),
      isOptional: true,
      isReadOnly: false,
      boundAttributeName: attributeName
    };
    and: 'a container name';
    const containerName = 'testContainer';
    when: 'creating the set accessor';
    const [accessorDeclaration, identifier] = createElementPropertySetAccessor(
      context,
      containerName,
      propertyDefinition
    );
    expect: 'a set accessor for an attribute-bound property that is optional to have been created';
    expect(accessorDeclaration).toBeSource(`
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
