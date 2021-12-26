import { toLowerCase } from '@komore/string';
import { type Observable, of } from '@komore/reactive';
import { parseElementAttributes } from '../attribute/parse-element-attributes';
import { getElementBaseClassInfo } from './get-element-base-class-info';
import { getElementClassName } from './get-element-class-name';
import { getElementTagName } from './get-element-tag-name';
import { type ParsedElementTemplate } from './parsed-element-template';

/**
 * Parses template elements
 * @param templateElements HTML template elements
 * @param scriptElements List of HTML script elements
 * @returns Parsed element
 */
export function parseTemplateElements(
  templateElements: ReadonlyArray<HTMLElement>,
  scriptElements: ReadonlyArray<HTMLScriptElement>
): Observable<ParsedElementTemplate> {
  const templateElement = getTemplateElement(templateElements);
  const { baseClassName, baseTagName } = getElementBaseClassInfo(templateElement);
  const className = getElementClassName(scriptElements, templateElement);
  const tagName = getElementTagName(templateElement);
  const parsedAttributes = parseElementAttributes(templateElement);
  const parsedElementTemplate: ParsedElementTemplate = {
    baseClassName,
    baseTagName,
    className,
    tagName,
    parsedAttributes,
    templateElement
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

  const tagNamesList = templateElements.map(({ tagName }) => tagName).map(toLowerCase).join(', ');
  throw new Error(`an element template cannot have more than one root element (found: ${tagNamesList})`);
}
