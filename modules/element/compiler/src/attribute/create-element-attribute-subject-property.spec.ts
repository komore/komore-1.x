import { factory } from 'typescript';
import { createElementAttributeSubjectProperty } from './create-element-attribute-subject-property';
import type { ElementAttributeDefinition } from './element-attribute-definition';

describe('Create element attribute subject', () => {
  it('builds an empty createElementAttributeSubject call for string attributes with no default', () => {
    // given: an element attribute definition for a string attribute with no
    const attributeDefinition: ElementAttributeDefinition = {
      attributeName: 'test-attribute',
      attributeValueType: factory.createTypeReferenceNode('string'),
      defaultValue: factory.createIdentifier('undefined'),
      optional: false
    };
    // when: creating an element attribute subject
    const propertyAssignment = createElementAttributeSubjectProperty(factory, attributeDefinition);
    // then: an empty createElementAttributeSubject call is 
    expect(propertyAssignment).toBeInlineSource('"test-attribute": _cEAS()');
  });

  it('builds a createElementAttributeSubject call for string attributes with no default', () => {
    // given: an element attribute definition for a string attribute with no
    const attributeDefinition: ElementAttributeDefinition = {
      attributeName: 'test-attribute',
      attributeValueType: factory.createTypeReferenceNode('string'),
      defaultValue: factory.createIdentifier('undefined'),
      optional: false
    };
    // when: creating an element attribute subject
    const propertyAssignment = createElementAttributeSubjectProperty(factory, attributeDefinition);
    // then:
    expect(propertyAssignment).toBeInlineSource('"test-attribute": _cEAS<string>()');
  });
});
