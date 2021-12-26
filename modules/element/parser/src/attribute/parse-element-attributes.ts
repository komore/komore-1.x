import { ElementAttributeSpecification } from './element-attribute-specification';
import { parseElementAttribute } from './parse-element-attribute';
import { type ParsedElementAttribute } from './parsed-element-attribute';

/**
 * Builds a list of parsed element attributes from a named node map
 * @param attributesMap Attributes named node map
 * @returns List of parsed element attributes
 */
export function parseElementAttributes(htmlElement: HTMLElement): ReadonlyArray<ParsedElementAttribute> {
  return htmlElement.getAttributeNames().map(getElementAttributeSpecification(htmlElement)).map(parseElementAttribute);
}

/**
 * Gets an element attribute specification, given an attribute name and an HTML element
 * @param htmlElement HTML element
 */
function getElementAttributeSpecification(htmlElement: HTMLElement) {
  return (attributeName: string): ElementAttributeSpecification => {
    const attributeValue = htmlElement.getAttribute(attributeName) as string;
    return {
      nameSpecification: attributeName,
      valueSpecification: attributeValue !== '' ? attributeValue : undefined
    };
  };
}
