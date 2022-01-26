import { elementAttributeNameToElementAttributeSpecificationFor } from './element-attribute-name-to-element-attribute-specification-for';
import { elementAttributeSpecificationToParsedElementAttribute } from './element-attribute-specification-to-parsed-element-attribute';
import { type ParsedElementAttribute } from './parsed-element-attribute';

/**
 * Builds a list of parsed element attributes from a named node map
 * @param attributesMap Attributes named node map
 * @returns List of parsed element attributes
 */
export function htmlElementToParsedElementAttributes(htmlElement: HTMLElement): ReadonlyArray<ParsedElementAttribute> {
  return htmlElement
    .getAttributeNames()
    .map(elementAttributeNameToElementAttributeSpecificationFor(htmlElement))
    .map(elementAttributeSpecificationToParsedElementAttribute);
}
