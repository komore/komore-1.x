import { assertValidBooleanAttributeDefaultValue } from './assert-valid-boolean-attribute-default-value';

describe('Assert valid boolean attribute default value', () => {
  it.each(['true', 'false'])('does not throw for boolean attribute value "%s"', attributeValue => {
    given: 'a valid boolean attribute value';
    expect: 'no error to be thrown when asserting it is a valid boolean attribute value';
    expect(() => assertValidBooleanAttributeDefaultValue(attributeValue)).not.toThrow();
  });

  it('throws when passing an invalid boolean attribute value', () => {
    given: 'an invalid attribute value type';
    const attributeValue = 'False';
    expect: 'an error to be thrown when asserting it is a valid attribute value type';
    expect(() => assertValidBooleanAttributeDefaultValue(attributeValue)).toThrowError(
      `invalid boolean attribute default value "${attributeValue}"`
    );
  });
});
