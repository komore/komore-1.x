import { of } from '@komore/reactive';
import { stringToLowerCase } from '@komore/string';

import { htmlElementToParsedElementAttributes } from '../attribute/html-element-to-parsed-element-attributes';
import { getElementClassName } from './get-element-class-name';
import { getElementTagName } from './get-element-tag-name';
import { type ParsedElementTemplate } from './parsed-element-template';
import { templateElementToElementBaseClassInfo } from './template-element-to-element-base-class-info';

/**
 * Parses template elements
 *
 * @param templateElements HTML template elements
 * @param scriptElements List of HTML script elements
 * @returns Parsed element
 */
export function parseTemplateElements(
  templateElements: ReadonlyArray<HTMLElement>,
  scriptElements: ReadonlyArray<HTMLScriptElement>
): Observable<ParsedElementTemplate> {
  const templateElement = getTemplateElement(templateElements);
  const { baseClassName, baseTagName } = templateElementToElementBaseClassInfo(templateElement);
  const className = getElementClassName(scriptElements, templateElement);
  const tagName = getElementTagName(templateElement);
  const parsedAttributes = htmlElementToParsedElementAttributes(templateElement);
  const parsedElementTemplate: ParsedElementTemplate = {
    baseClassName,
    baseTagName,
    className,
    tagName,
    parsedAttributes,
    templateElement,
  };

  return of(parsedElementTemplate);
}

/**
 * Gets a template element, validating that there is only one available
 * @param templateElements List of template elements
 * @returns Template element
 */
function getTemplateElement(templateElements: ReadonlyArray<HTMLElement>): HTMLElement {
  const count = templateElements.length;

  if (count === 1) {
    return templateElements[0];
  }

  if (count === 0) {
    throw new Error('an element template must have a root element');
  }

  const tagNamesList = templateElements
    .map(element => element.tagName)
    .map(stringToLowerCase)
    .join(', ');
  throw new Error(`an element template cannot have more than one root element (found: ${tagNamesList})`);
}
