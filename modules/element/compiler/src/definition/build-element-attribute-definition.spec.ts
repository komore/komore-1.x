import type { ParsedElementAttribute } from '@komore/element/parser';
import { factory } from 'typescript';
import { buildElementAttributeDefinition } from './build-element-attribute-definition';

describe('Build element attribute definition', () => {
  it.each([true, false])('can build an attribute without a default value, optional or not', optional => {
    given: 'a parsed element attribute without a default value';
    const parsedAttribute: ParsedElementAttribute = {
      attributeName: 'test-attribute',
      attributeValueType: 'string',
      optional
    };
    when: 'building the element attribute definition';
    const attributeDefinition = buildElementAttributeDefinition(factory, parsedAttribute);
    expect: 'an attribute definition with a string value type and no default value to have been created';
    expect(attributeDefinition.attributeName).toBe(parsedAttribute.attributeName);
    expect(attributeDefinition.attributeValueType).toBe(parsedAttribute.attributeValueType);
    expect(attributeDefinition.attributeType).toBeInlineSource(parsedAttribute.attributeValueType);
    expect(attributeDefinition.defaultValue).toBeInlineSource('undefined');
    expect(attributeDefinition.optional).toBe(parsedAttribute.optional);
    // TODO:
    where: 'the attribute may or may not be optional';
    optional;
    true;
    false;
  });

  describe('default values', () => {
    it('can build an attribute with a default string value', () => {
      given: 'a parsed element attribute with a string type and a default value';
      const defaultValue = 'test';
      const parsedAttribute: ParsedElementAttribute = {
        attributeName: 'test-attribute',
        attributeValueType: 'string',
        defaultValue,
        optional: false
      };
      when: 'building the element attribute definition';
      const attributeDefinition = buildElementAttributeDefinition(factory, parsedAttribute);
      expect: 'an attribute definition with a string value type and the specified default value to have been created';
      expect(attributeDefinition.attributeName).toBe(parsedAttribute.attributeName);
      expect(attributeDefinition.attributeValueType).toBe(parsedAttribute.attributeValueType);
      expect(attributeDefinition.attributeType).toBeInlineSource(parsedAttribute.attributeValueType);
      expect(attributeDefinition.defaultValue).toBeInlineSource(`"${defaultValue}"`);
      expect(attributeDefinition.optional).toBe(parsedAttribute.optional);
    });

    it.each(['42', '3.14'])('can build an attribute with a default number value', defaultValue => {
      given: 'a parsed element attribute with a number type and a default value';
      const parsedAttribute: ParsedElementAttribute = {
        attributeName: 'test-attribute',
        attributeValueType: 'number',
        defaultValue,
        optional: false
      };
      when: 'building the element attribute definition';
      const attributeDefinition = buildElementAttributeDefinition(factory, parsedAttribute);
      then: 'an attribute definition with a string value type and the specified default value is created';
      expect(attributeDefinition.attributeName).toBe(parsedAttribute.attributeName);
      expect(attributeDefinition.attributeValueType).toBe(parsedAttribute.attributeValueType);
      expect(attributeDefinition.attributeType).toBeInlineSource(parsedAttribute.attributeValueType);
      expect(attributeDefinition.defaultValue).toBeInlineSource(defaultValue);
      expect(attributeDefinition.optional).toBe(parsedAttribute.optional);
    });

    it('rejects invalid default number values', () => {
      given: 'a parsed element attribute with a boolean type and an invalid default number value';
      const defaultValue = 'not-a-number';
      const parsedAttribute: ParsedElementAttribute = {
        attributeName: 'test-attribute',
        attributeValueType: 'number',
        defaultValue,
        optional: false
      };
      expect: 'building an element attribute definition to throw an error';
      expect(() => buildElementAttributeDefinition(factory, parsedAttribute)).toThrowError(
        `invalid number attribute default value ${defaultValue}`
      );
    });

    it.each(['false', 'true'])('can build an attribute with a default boolean value', defaultValue => {
      given: 'a parsed element attribute with a boolean type and a default value';
      const parsedAttribute: ParsedElementAttribute = {
        attributeName: 'test-attribute',
        attributeValueType: 'boolean',
        defaultValue,
        optional: false
      };
      when: 'building the element attribute definition';
      const attributeDefinition = buildElementAttributeDefinition(factory, parsedAttribute);
      then: 'an attribute definition with a boolean value type and the specified default value is created';
      expect(attributeDefinition.attributeName).toBe(parsedAttribute.attributeName);
      expect(attributeDefinition.attributeValueType).toBe(parsedAttribute.attributeValueType);
      expect(attributeDefinition.attributeType).toBeInlineSource(parsedAttribute.attributeValueType);
      expect(attributeDefinition.defaultValue).toBeInlineSource(defaultValue);
      expect(attributeDefinition.optional).toBe(parsedAttribute.optional);
    });

    it('rejects invalid default boolean values', () => {
      given: 'a parsed element attribute with a boolean type and an invalid default boolean value';
      const defaultValue = 'not-a-boolean';
      const parsedAttribute: ParsedElementAttribute = {
        attributeName: 'test-attribute',
        attributeValueType: 'boolean',
        defaultValue,
        optional: false
      };
      expect: 'building an element attribute definition to throw an error';
      expect(() => buildElementAttributeDefinition(factory, parsedAttribute)).toThrowError(
        `invalid boolean attribute default value ${defaultValue}`
      );
    });
  });
});
