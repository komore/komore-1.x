import { attributeValueToBoolean } from './attribute-value-to-boolean';

describe('Map element attribute to boolean', () => {
  it('maps "true" to true', () => {
    given: 'a true attribute value';
    const attributeValue = 'true';
    when: 'mapping to a boolean';
    const booleanValue = attributeValueToBoolean(attributeValue);
    then: 'true is returned';
    expect(booleanValue).toBe(true);
  });

  it('maps an empty string to true', () => {
    given: 'an empty attribute value';
    const attributeValue = '';
    when: 'mapping to a boolean';
    const booleanValue = attributeValueToBoolean(attributeValue);
    then: 'true is returned';
    expect(booleanValue).toBe(true);
  });

  it('maps everything else to false', () => {
    given: 'an attribute value that is not true or an empty string';
    const attributeValue = 'test';
    when: 'mapping to a boolean';
    const booleanValue = attributeValueToBoolean(attributeValue);
    then: 'false is returned';
    expect(booleanValue).toBe(false);
  });
});
