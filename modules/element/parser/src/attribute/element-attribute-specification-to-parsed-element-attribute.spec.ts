import { type ElementAttributeSpecification } from './element-attribute-specification';
import { elementAttributeSpecificationToParsedElementAttribute } from './element-attribute-specification-to-parsed-element-attribute';

describe('Element attribute specification to parsed element attribute', () => {
  it('can parse an attribute without a value', () => {
    given: 'an attribute without a value';
    const attributeName = 'test-attribute';
    const attributeSpecification = createSpecification(attributeName);
    when: 'parsing the attribute';
    const parsedAttribute = elementAttributeSpecificationToParsedElementAttribute(attributeSpecification);
    then: 'a parsed attribute with a string value type and no default value is created';
    expect(parsedAttribute.attributeName).toBe(attributeName);
    expect(parsedAttribute.attributeValueType).toBe('string');
    expect(parsedAttribute.defaultValue).toBeUndefined();
    expect(parsedAttribute.optional).toBe(false);
  });

  it.each(['@', '^', '.', '#'])('rejects attribute names that start with reserved characters', forbiddenPrefix => {
    given: 'an attribute with a forbidden name prefix';
    const attributeName = forbiddenPrefix + 'test-attribute';
    const attributeSpecification = createSpecification(attributeName);
    then: 'a parsed attribute with a string value type and no default value is created';
    expect(() => elementAttributeSpecificationToParsedElementAttribute(attributeSpecification)).toThrowError(
      `invalid attribute name specification "${attributeName}"`
    );
  });

  it('can parse an attribute with a default value', () => {
    given: 'an attribute with a value';
    const attributeName = 'test-attribute';
    const attributeValue = 'test-default-value';
    const attributeSpecification = createSpecification(attributeName, attributeValue);
    when: 'parsing the attribute';
    const parsedAttribute = elementAttributeSpecificationToParsedElementAttribute(attributeSpecification);
    then: 'a parsed attribute with a default value is created';
    expect(parsedAttribute.attributeName).toBe(attributeName);
    expect(parsedAttribute.attributeValueType).toBe('string');
    expect(parsedAttribute.defaultValue).toBe(attributeValue);
    expect(parsedAttribute.optional).toBe(false);
  });

  it('can parse an attribute with a default value set to undefined', () => {
    given: 'an attribute with a value';
    const attributeName = 'test-attribute';
    const attributeValue = 'undefined';
    const attributeSpecification = createSpecification(attributeName, attributeValue);
    when: 'parsing the attribute';
    const parsedAttribute = elementAttributeSpecificationToParsedElementAttribute(attributeSpecification);
    then: 'a parsed attribute with a default value that is undefined';
    expect(parsedAttribute.attributeName).toBe(attributeName);
    expect(parsedAttribute.attributeValueType).toBe('string');
    expect(parsedAttribute.defaultValue).toBeUndefined();
    expect(parsedAttribute.optional).toBe(false);
  });

  it('can parse an optional attribute', () => {
    given: 'an attribute with a question mark suffix in its name';
    const attributeName = 'test-attribute';
    const attributeSpecification = createSpecification(`${attributeName}?`);
    when: 'parsing the attribute';
    const parsedAttribute = elementAttributeSpecificationToParsedElementAttribute(attributeSpecification);
    then: "a parsed attribute that's marked as optional is created";
    expect(parsedAttribute.attributeName).toBe(attributeName);
    expect(parsedAttribute.attributeValueType).toBe('string');
    expect(parsedAttribute.defaultValue).toBeUndefined();
    expect(parsedAttribute.optional).toBe(true);
  });

  it('can build an attribute with an explicit type', () => {
    given: 'an attribute with an explicit type in its name';
    const attributeName = 'test-attribute';
    const expectedType = 'number';
    const attributeSpecification = createSpecification(`${attributeName}:${expectedType}`);
    when: 'parsing the attribute';
    const parsedAttribute = elementAttributeSpecificationToParsedElementAttribute(attributeSpecification);
    then: 'an attribute definition with a string value type and the apecified default value is created';
    expect(parsedAttribute.attributeName).toBe(attributeName);
    expect(parsedAttribute.attributeValueType).toBe(expectedType);
    expect(parsedAttribute.defaultValue).toBeUndefined();
    expect(parsedAttribute.optional).toBe(false);
  });

  it('throws an error when using an attribute type other than string, number or boolean', () => {
    given: 'an attribute with an explicit type other than string, number or boolean';
    const attributeName = 'test-attribute';
    const expectedType = 'test';
    const attributeSpecification = createSpecification(`${attributeName}:${expectedType}`);
    expect: 'parsing the attribute to throw an error';
    expect(() => elementAttributeSpecificationToParsedElementAttribute(attributeSpecification)).toThrowError(
      'invalid attribute value type "test"'
    );
  });

  describe('number default values', () => {
    it('accepts valid default number values', () => {
      given: 'an attribute name with a number type and a default value';
      const attributeName = 'test-attribute';
      const expectedType = 'number';
      const attributeValue = '3.14';
      const attributeSpecification = createSpecification(`${attributeName}:${expectedType}`, attributeValue);
      expect: 'parsing the attribute not to throw';
      expect(() => elementAttributeSpecificationToParsedElementAttribute(attributeSpecification)).not.toThrow();
    });

    it('rejects invalid default number values', () => {
      given: 'an attribute name with a number type and a default value that is not a valid number';
      const attributeName = 'test-attribute';
      const expectedType = 'number';
      const attributeValue = 'test';
      const attributeSpecification = createSpecification(`${attributeName}:${expectedType}`, attributeValue);
      expect: 'parsing the attribute to throw an error';
      expect(() => elementAttributeSpecificationToParsedElementAttribute(attributeSpecification)).toThrowError(
        `invalid number attribute default value "${attributeValue}"`
      );
    });
  });

  describe('boolean default values', () => {
    it.each(['false', 'true'])('accepts valid default boolean values', attributeValue => {
      given: 'an attribute name with a boolean type and a default value';
      const attributeName = 'test-attribute';
      const expectedType = 'boolean';
      const attributeSpecification = createSpecification(`${attributeName}:${expectedType}`, attributeValue);
      expect: 'parsing the attribute not to throw';
      expect(() => elementAttributeSpecificationToParsedElementAttribute(attributeSpecification)).not.toThrow();
    });

    it('rejects invalid default boolean values', () => {
      given: 'an attribute name with a number type and a default value that is not a valid number';
      const attributeName = 'test-attribute';
      const expectedType = 'boolean';
      const attributeValue = 'test';
      const attributeSpecification = createSpecification(`${attributeName}:${expectedType}`, attributeValue);
      expect: 'parsing the attribute to throw an error';
      expect(() => elementAttributeSpecificationToParsedElementAttribute(attributeSpecification)).toThrowError(
        `invalid boolean attribute default value "${attributeValue}"`
      );
    });
  });
});

function createSpecification(attributeName: string, attributeValue?: string): ElementAttributeSpecification {
  return {
    nameSpecification: attributeName,
    valueSpecification: attributeValue
  };
}
