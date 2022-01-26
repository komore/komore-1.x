import { createDocumentFragment } from '@komore/element/testing';
import { htmlElementToParsedElementAttributes } from './html-element-to-parsed-element-attributes';

describe('HTML element to parsed element attributes', () => {
  it('can parse attributes', () => {
    given: 'an HTML element';
    const htmlElement = createDocumentFragment(`
      <test-element test-attribute1 test-attribute2?:number="42">
      </test-element>
    `).firstElementChild as HTMLElement;
    when: "parsing the element's attributes";
    const parsedAttributes = htmlElementToParsedElementAttributes(htmlElement);
    then: 'the list of parsed attributes is returned';
    expect(parsedAttributes.length).toBe(2);
    const attribute1 = parsedAttributes[0];
    expect(attribute1.attributeName).toBe('test-attribute1');
    expect(attribute1.attributeValueType).toBe('string');
    expect(attribute1.defaultValue).toBeUndefined();
    expect(attribute1.optional).toBe(false);
    const attribute2 = parsedAttributes[1];
    expect(attribute2.attributeName).toBe('test-attribute2');
    expect(attribute2.attributeValueType).toBe('number');
    expect(attribute2.defaultValue).toBe('42');
    expect(attribute2.optional).toBe(true);
  });
});
