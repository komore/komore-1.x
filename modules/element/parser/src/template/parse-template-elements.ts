import type { Observable } from 'rxjs';
import { of } from 'rxjs';
import { parseElementAttributes } from '../attribute/parse-element-attributes';
import { getElementBaseClassInfo } from './get-element-base-class-info';
import { getElementClassName } from './get-element-class-name';
import { getElementTagName } from './get-element-tag-name';
import type { ParsedElementTemplate } from './parsed-element-template';

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

  return of({
    baseClassName,
    baseTagName,
    className,
    tagName,
    parsedAttributes,
    templateElement
  });
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

  const tagNames = templateElements.map(({ tagName }) => tagName.toLocaleLowerCase());
  const tagNamesList = tagNames.join(', ');
  throw new Error(`an element template cannot have more than one root element (found: ${tagNamesList})`);
}
