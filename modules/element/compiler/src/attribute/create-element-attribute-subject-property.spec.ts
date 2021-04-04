import { factory } from 'typescript';
import type { ElementAttributeDefinition } from '../definition/element-attribute-definition';
import { createElementAttributeSubjectProperty } from './create-element-attribute-subject-property';

describe('Create element attribute subject', () => {
  it('builds an createElementAttributeSubject call for string attributes with no default', () => {
    given: 'an element attribute definition for a string attribute with no default value';
    const attributeName = 'test-attribute';
    const attributeType = 'string';
    const attributeDefinition: ElementAttributeDefinition = {
      attributeName: 'test-attribute',
      attributeValueType: attributeType,
      attributeType: factory.createTypeReferenceNode(attributeType),
      defaultValue: factory.createIdentifier('undefined'),
      optional: false
    };
    when: 'creating an element attribute subject';
    const propertyAssignment = createElementAttributeSubjectProperty(factory, attributeDefinition);
    expect: 'a property assigned to an empty createElementAttributeSubject call to be created';
    expect(propertyAssignment).toBeInlineSource(`"${attributeName}": _cEAS<${attributeType}>()`);
  });

  it('builds a createElementAttributeSubject call for number attributes with no default', () => {
    given: 'an element attribute definition for a string attribute with no';
    const attributeName = 'test-attribute';
    const attributeType = 'number';
    const attributeDefinition: ElementAttributeDefinition = {
      attributeName: 'test-attribute',
      attributeValueType: attributeType,
      attributeType: factory.createTypeReferenceNode(attributeType),
      defaultValue: factory.createIdentifier('undefined'),
      optional: false
    };
    when: 'creating an element attribute subject';
    const propertyAssignment = createElementAttributeSubjectProperty(factory, attributeDefinition);
    expect: 'a property assigned to a typed createElementAttributeSubject call to be created';
    expect(propertyAssignment).toBeInlineSource(`"${attributeName}": _cEAS<${attributeType}>()`);
  });
});
