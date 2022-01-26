import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { createMockElementCompilerContext } from '../../test-helpers.spec';
import { createElementPropertyGetAccessor } from './create-element-property-get-accessor';

describe('Create element property get accessor', () => {
  it('can create a get accessor declaration for a mandatory property', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'an element property definition for a property that is mandatory';
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
    when: 'creating the get accessor';
    const [accessorDeclaration, identifier] = createElementPropertyGetAccessor(
      context,
      containerName,
      propertyDefinition
    );
    expect: 'a get accessor for a property that is not optional to have been created';
    expect(accessorDeclaration).toBeSource(`
      get ${propertyName}(): ${propertyType} {
        return this.${containerName}.${propertyName}.value;
      }
    `);
    expect(identifier.text).toBe(propertyName);
  });

  it('can create a get accessor declaration for an optional property', () => {
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
    when: 'creating the get accessor';
    const [accessorDeclaration, identifier] = createElementPropertyGetAccessor(
      context,
      containerName,
      propertyDefinition
    );
    expect: 'a get accessor for a property that is not optional to have been created';
    expect(accessorDeclaration).toBeSource(`
      get ${propertyName}(): ${propertyType} | undefined {
        return this.${containerName}.${propertyName}.value;
      }
    `);
    expect(identifier.text).toBe(propertyName);
  });
});
