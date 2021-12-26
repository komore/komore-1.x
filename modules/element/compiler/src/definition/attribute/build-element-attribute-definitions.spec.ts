import { type ParsedElementAttribute } from '@komore/element/parser';
import { factory } from 'typescript';
import { buildElementAttributeDefinitions } from './build-element-attribute-definitions';

describe('Build element attribute definitions', () => {
  it('supports empty lists', () => {
    given: 'an empty list of parsed attributes';
    const parsedAttributes: ReadonlyArray<ParsedElementAttribute> = [];
    when: 'building an element attribute definitions';
    const attributeDefinitions = buildElementAttributeDefinitions(factory, parsedAttributes);
    expect: 'an empty list of attribute definitions to be returned';
    expect(attributeDefinitions.length).toBe(0);
  });

  it('can build element attribute definitions from parsed attributes', () => {
    given: 'a list of parsed attributes';
    const parsedAttributes: ReadonlyArray<ParsedElementAttribute> = [
      {
        attributeName: 'test-attribute',
        attributeValueType: 'string',
        optional: false
      }
    ];
    when: 'building an element attribute definitions';
    const attributeDefinitions = buildElementAttributeDefinitions(factory, parsedAttributes);
    expect: 'a list of built attribute definitions to be returned';
    expect(attributeDefinitions.length).toBe(1);
    const attributeDefinition = attributeDefinitions[0];
    expect(attributeDefinition.attributeName).toBe('test-attribute');
  });
});
