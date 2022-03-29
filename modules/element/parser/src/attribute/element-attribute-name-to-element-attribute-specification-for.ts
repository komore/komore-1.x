import { type ElementAttributeSpecification } from './element-attribute-specification';

/**
 * Creates a function that gets an element attribute specification for an HTML element, given an attribute name
 * @param htmlElement HTML element
 * @returns Function that gets an element attribute specification for the HTML element, given an attribute name
 */
export function elementAttributeNameToElementAttributeSpecificationFor(htmlElement: HTMLElement) {
  return (attributeName: string): ElementAttributeSpecification => {
    const attributeValue = htmlElement.getAttribute(attributeName) ?? '';
    return {
      nameSpecification: attributeName,
      valueSpecification: attributeValue !== '' ? attributeValue : undefined
    };
  };
}
