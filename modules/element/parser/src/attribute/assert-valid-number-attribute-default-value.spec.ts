import { assertValidNumberAttributeDefaultValue } from './assert-valid-number-attribute-default-value';

describe('Assert valid number attribute default value', () => {
  it.each(['0', '42', '3.14', '-5'])('does not throw for number attribute value "%s"', attributeValue => {
    given: 'a valid number attribute value';
    expect: 'no error to be thrown when asserting it is a valid number attribute value';
    expect(() => assertValidNumberAttributeDefaultValue(attributeValue)).not.toThrow();
  });

  it('throws when passing an invalid number attribute value', () => {
    given: 'an invalid attribute value type';
    const attributeValue = '1d';
    expect: 'an error to be thrown when asserting it is a valid attribute value type';
    expect(() => assertValidNumberAttributeDefaultValue(attributeValue)).toThrowError(
      `invalid number attribute default value "${attributeValue}"`
    );
  });
});
