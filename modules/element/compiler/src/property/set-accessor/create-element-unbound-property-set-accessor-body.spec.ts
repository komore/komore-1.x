import { type ElementPropertyDefinition } from '@komore/element/compiler/processor';
import { createMockElementCompilerContext } from '../../test-helpers.spec';
import { createElementUnboundPropertySetAccessorBody } from './create-element-unbound-property-set-accessor-body';

describe('Create element unbound property set accessor body', () => {
  it('creates an element unbound property set accessor body', () => {
    given: 'an element compiler context';
    const context = createMockElementCompilerContext();
    and: 'a property definition';
    const propertyName = 'testProperty';
    const propertyType = 'string';
    const propertyDefinition: ElementPropertyDefinition = {
      propertyName,
      propertyType: context.factory.createTypeReferenceNode(propertyType),
      isOptional: false,
      isReadOnly: false
    };
    and: 'a container name and a value identifier';
    const containerName = 'testContainer';
    const valueName = 'testValue';
    const valueIdentifier = context.factory.createIdentifier(valueName);
    when: 'creating an element unbound property set accessor body';
    const body = createElementUnboundPropertySetAccessorBody(
      context,
      containerName,
      propertyDefinition,
      valueIdentifier
    );
    expect: 'the body to call next with the value on the property subject';
    expect(body).toBeSource(`
      {
        this.${containerName}.${propertyName}.next(${valueName});
      }
    `);
  });
});
