import { factory } from 'typescript';
import { buildElementAttributeDefinition } from './build-element-attribute-definition';

describe('Build element attribute definition', () => {
  it('can build an attribute without default value', () => {
    // given: an attribute name
    const attributeName = 'test-attribute';
    // when: building the element attribute definition
    const attributeDefinition = buildElementAttributeDefinition(factory, attributeName);
    // then: an attribute definition with a string value type and no default value is created
    expect(attributeDefinition.attributeName).toBe(attributeName);
    expect(attributeDefinition.attributeValueType).toBeInlineSource('string');
    expect(attributeDefinition.defaultValue).toBeInlineSource('undefined');
    expect(attributeDefinition.optional).toBe(false);
  });

  it('can build an attribute with a default value', () => {
    // given: an attribute name and a default value
    const attributeName = 'test-attribute';
    const attributeValue = 'test-default-value';
    // when: building the element attribute definition
    const attributeDefinition = buildElementAttributeDefinition(factory, attributeName, attributeValue);
    // then: an attribute definition with a string value type and the apecified default value is created
    expect(attributeDefinition.attributeName).toBe(attributeName);
    expect(attributeDefinition.attributeValueType).toBeInlineSource('string');
    expect(attributeDefinition.defaultValue).toBeInlineSource(`'${attributeValue}'`);
    expect(attributeDefinition.optional).toBe(false);
  });

  it('can build an optional attribute', () => {
    // given: an attribute name
    const attributeName = 'test-attribute';
    // when: building the element attribute definition
    const attributeDefinition = buildElementAttributeDefinition(factory, attributeName);
    // then: an attribute definition with a string value type and no default value is created
    expect(attributeDefinition.attributeName).toBe(attributeName);
    expect(attributeDefinition.attributeValueType).toBeInlineSource('string');
    expect(attributeDefinition.defaultValue).toBeInlineSource('undefined');
    expect(attributeDefinition.optional).toBe(false);
  });

  it('can build an attribute with an explicit type', () => {
    // given: an attribute name with a type
    const attributeName = 'test-attribute';
    const expectedType = 'TestType';
    const specifiedAttributeName = `${attributeName}:${expectedType}`;
    // when: building the element attribute definition
    const attributeDefinition = buildElementAttributeDefinition(factory, specifiedAttributeName);
    // then: an attribute definition with a string value type and the apecified default value is created
    expect(attributeDefinition.attributeName).toBe(attributeName);
    expect(attributeDefinition.attributeValueType).toBeInlineSource(expectedType);
    expect(attributeDefinition.defaultValue).toBeInlineSource('undefined');
    expect(attributeDefinition.optional).toBe(false);
  });

  it('can build an attribute with a default number value', () => {
    // given: an attribute name with a number type and a default value
    const attributeName = 'test-attribute';
    const expectedType = 'number';
    const specifiedAttributeName = `${attributeName}:${expectedType}`;
    const attributeValue = '42';
    // when: building the element attribute definition
    const attributeDefinition = buildElementAttributeDefinition(factory, specifiedAttributeName, attributeValue);
    // then: an attribute definition with a string value type and the apecified default value is created
    expect(attributeDefinition.attributeName).toBe(attributeName);
    expect(attributeDefinition.attributeValueType).toBeInlineSource(expectedType);
    expect(attributeDefinition.defaultValue).toBeInlineSource(attributeValue);
    expect(attributeDefinition.optional).toBe(false);
  });

  it.each(['false', 'true'])('can build an attribute with a default boolean value', attributeValue => {
    // given: an attribute name with a boolean type and a default value
    const attributeName = 'test-attribute';
    const expectedType = 'boolean';
    const specifiedAttributeName = `${attributeName}:${expectedType}`;
    // when: building the element attribute definition
    const attributeDefinition = buildElementAttributeDefinition(factory, specifiedAttributeName, attributeValue);
    // then: an attribute definition with a string value type and the apecified default value is created
    expect(attributeDefinition.attributeName).toBe(attributeName);
    expect(attributeDefinition.attributeValueType).toBeInlineSource(expectedType);
    expect(attributeDefinition.defaultValue).toBeInlineSource(attributeValue);
    expect(attributeDefinition.optional).toBe(false);
  });

  it('throws an error when using an invalid default number value', () => {
    // given: an attribute name with a number type and an invalid default value
    const attributeName = 'test-attribute:number';
    const attributeValue = 'invalid-number-value';
    // expect: an error to be thrown when building the element attribute definition
    expect(() => buildElementAttributeDefinition(factory, attributeName, attributeValue)).toThrowError(
      `invalid number attribute default value ${attributeValue}`
    );
  });

  it('throws an error when using an invalid default boolean value', () => {
    // given: an attribute name with a boolean type and an invalid default value
    const attributeName = 'test-attribute:boolean';
    const attributeValue = 'invalid-boolean-value';
    // expect: an error to be thrown when building the element attribute definition
    expect(() => buildElementAttributeDefinition(factory, attributeName, attributeValue)).toThrowError(
      `invalid boolean attribute default value ${attributeValue}`
    );
  });
});
