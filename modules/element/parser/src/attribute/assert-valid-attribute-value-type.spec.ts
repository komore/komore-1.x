import { assertValidAttributeValueType } from './assert-valid-attribute-value-type';

describe('Assert valid attribute value type', () => {
  it.each(['boolean', 'number', 'string'])('does not throw for attribute type %s', attributeValueType => {
    given: 'a valid attribute value type';
    expect: 'no error to be thrown when asserting it is a valid attribute value type';
    expect(() => assertValidAttributeValueType(attributeValueType)).not.toThrow();
  });

  it('throws when passing an invalid attribute value type', () => {
    given: 'an invalid attribute value type';
    const attributeValueType = 'invalid-type';
    expect: 'an error to be thrown when asserting it is a valid attribute value type';
    expect(() => assertValidAttributeValueType(attributeValueType)).toThrowError(
      `invalid attribute value type "${attributeValueType}"`
    );
  });
});
