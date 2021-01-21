import { factory } from 'typescript';
import type { ElementAttributeDefinition } from '../definition/element-attribute-definition';
import { createElementAttributeSubjectProperty } from './create-element-attribute-subject-property';

describe('Create element attribute subject', () => {
  it('builds an empty createElementAttributeSubject call for string attributes with no default', () => {
    given: 'an element attribute definition for a string attribute with no default value'
    const attributeDefinition: ElementAttributeDefinition = {
      attributeName: 'test-attribute',
      attributeValueType: 'string',
      attributeType: factory.createTypeReferenceNode('string'),
      defaultValue: factory.createIdentifier('undefined'),
      optional: false
    };
    when: 'creating an element attribute subject'
    const propertyAssignment = createElementAttributeSubjectProperty(factory, attributeDefinition);
    then: 'a property assigned to an empty createElementAttributeSubject call is created'
    expect(propertyAssignment).toBeInlineSource('"test-attribute": _cEAS()');
  });

  it('builds a createElementAttributeSubject call for string attributes with no default', () => {
    // given: an element attribute definition for a string attribute with no
    const attributeDefinition: ElementAttributeDefinition = {
      attributeName: 'test-attribute',
      attributeValueType: 'string',
      attributeType: factory.createTypeReferenceNode('string'),
      defaultValue: factory.createIdentifier('undefined'),
      optional: false
    };
    // when: creating an element attribute subject
    const propertyAssignment = createElementAttributeSubjectProperty(factory, attributeDefinition);
    // then:
    expect(propertyAssignment).toBeInlineSource('"test-attribute": _cEAS<string>()');
  });
});
