import { parseStyleCustomPropertyReferences } from './parse-style-custom-property-references';

describe('Parse style custom property references', () => {
  it('returns an empty array when no custom property reference is found', () => {
    given: 'a css property value with no custom property reference'
    const gradientStart = '#fff';
    const gradientEnd = '#000';
    const propertyValue = `linear-gradient(top right, ${gradientStart}, ${gradientEnd})`;
    when: 'parsing the property value'
    const propertyReferences = parseStyleCustomPropertyReferences(propertyValue);
    then: 'an empty list is returned'
    expect(propertyReferences.length).toBe(0);
  });

  it('can parse a custom property reference', () => {
    given: 'a css property value with custom properties'
    const customPropertyName = '--gradient-start';
    const gradientStart = `var(${customPropertyName})`;
    const gradientEnd = '#000';
    const propertyValue = `linear-gradient(top right, ${gradientStart}, ${gradientEnd})`;
    when: 'parsing the property value'
    const propertyReferences = parseStyleCustomPropertyReferences(propertyValue);
    then: 'both custom property references are returned'
    expect(propertyReferences.length).toBe(1);
    const propertyReference = propertyReferences[0];
    expect(propertyReference.name).toBe(customPropertyName);
    expect(propertyReference.inherits).toBe(true);
    expect(propertyReference.initialValue).toBeUndefined();
    expect(propertyReference.syntax).toBeUndefined();
  });

  it('can parse a custom property reference with a default value', () => {
    given: 'a css property value with custom properties'
    const customPropertyName = '--gradient-start';
    const gradientStartDefault = '#fff';
    const gradientStart = `var(${customPropertyName}, ${gradientStartDefault})`;
    const gradientEnd = '#000';
    const propertyValue = `linear-gradient(top right, ${gradientStart}, ${gradientEnd})`;
    when: 'parsing the property value'
    const propertyReferences = parseStyleCustomPropertyReferences(propertyValue);
    then: 'the custom property reference includes a default value'
    expect(propertyReferences.length).toBe(1);
    const propertyReference = propertyReferences[0];
    expect(propertyReference.name).toBe(customPropertyName);
    expect(propertyReference.inherits).toBe(true);
    expect(propertyReference.initialValue).toBe(gradientStartDefault);
    expect(propertyReference.syntax).toBeUndefined();
  });

  it('can parse nested custom property references', () => {
    given: 'a css property value with nested custom properties'
    const customPropertyName = '--gradient-start';
    const ref1 = '--reference-1';
    const ref2 = '--reference-2';
    const gradientStartDefault = '#fff';
    const gradientStart = `var(${customPropertyName}, var(${ref1}, var(${ref1}) 3px var(${ref2}, ${gradientStartDefault})))`;
    const gradientEnd = '#000';
    const propertyValue = `linear-gradient(top right, ${gradientStart}, ${gradientEnd})`;
    when: 'parsing the property value'
    const propertyReferences = parseStyleCustomPropertyReferences(propertyValue);
    then: 'the custom property references are all present, in a depth-first order'
    expect(propertyReferences.length).toBe(4);
    const propertyReference1 = propertyReferences[0];
    expect(propertyReference1.name).toBe(ref1);
    expect(propertyReference1.inherits).toBe(true);
    expect(propertyReference1.initialValue).toBeUndefined();
    expect(propertyReference1.syntax).toBeUndefined();
    const propertyReference2 = propertyReferences[1];
    expect(propertyReference2.name).toBe(ref2);
    expect(propertyReference2.inherits).toBe(true);
    expect(propertyReference2.initialValue).toBe(gradientStartDefault);
    expect(propertyReference2.syntax).toBeUndefined();
    const propertyReference3 = propertyReferences[2];
    expect(propertyReference3.name).toBe(ref1);
    expect(propertyReference3.inherits).toBe(true);
    expect(propertyReference3.initialValue).toBe(`var(${ref1}) 3px var(${ref2}, ${gradientStartDefault})`);
    expect(propertyReference3.syntax).toBeUndefined();
    const propertyReference4 = propertyReferences[3];
    expect(propertyReference4.name).toBe(customPropertyName);
    expect(propertyReference4.inherits).toBe(true);
    expect(propertyReference4.initialValue).toBe(`var(${ref1}, var(${ref1}) 3px var(${ref2}, ${gradientStartDefault}))`);
    expect(propertyReference4.syntax).toBeUndefined();
  });

  it('can parse multiple custom property references', () => {
    given: 'a css property value with custom properties'
    const customPropertyName1 = '--gradient-start';
    const customPropertyName2 = '--gradient-end';
    const gradientStart = `var(${customPropertyName1})`;
    const gradientEndDefault = '#000';
    const gradientEnd = `var(${customPropertyName2}, ${gradientEndDefault})`;
    const propertyValue = `linear-gradient( top right, ${gradientStart} , ${gradientEnd} )`;
    when: 'parsing the property value'
    const propertyReferences = parseStyleCustomPropertyReferences(propertyValue);
    then: 'both custom property references are returned'
    expect(propertyReferences.length).toBe(2);
    const propertyReference1 = propertyReferences[0];
    expect(propertyReference1.name).toBe(customPropertyName1);
    expect(propertyReference1.inherits).toBe(true);
    expect(propertyReference1.initialValue).toBeUndefined();
    expect(propertyReference1.syntax).toBeUndefined();
    const propertyReference2 = propertyReferences[1];
    expect(propertyReference2.name).toBe(customPropertyName2);
    expect(propertyReference2.inherits).toBe(true);
    expect(propertyReference2.initialValue).toBe(gradientEndDefault);
    expect(propertyReference2.syntax).toBeUndefined();
  });
});
