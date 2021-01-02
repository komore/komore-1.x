import type { HTMLElement } from 'node-html-parser';

const camelCaseFirstCharacterMatch = /(^\w|-\w)/g;

/**
 * Gets a class name for an element
 * @param scriptElements Script elements
 * @param templateElement Template element
 * @returns Element class name
 */
export function getElementClassName(scriptElements: ReadonlyArray<HTMLElement>, templateElement: HTMLElement): string {
  return getClassNameFromScriptClass(scriptElements) ?? getClassNameFromTemplateElement(templateElement);
}

/**
 * Gets a class name from script element class attributes
 * @param scriptElements Script elements
 * @returns Class name
 */
function getClassNameFromScriptClass(scriptElements: ReadonlyArray<HTMLElement>): string | undefined {
  const classNames = scriptElements
    .map(scriptElement => scriptElement.getAttribute('class'))
    .filter(className => className?.trim().length);
  if (classNames.length > 1) {
    const classNameList = classNames.join(', ');
    throw new Error(`more than one script element has a class attribute (${classNameList})`);
  }

  return classNames.length > 0 ? classNames[0] : undefined;
}

/**
 * Gets a class name from a template root element's tag name
 * @param templateElement Template element
 * @returns Class name
 */
function getClassNameFromTemplateElement(templateElement: HTMLElement): string {
  const tagName = templateElement.tagName.toLocaleLowerCase();
  return tagName.replace(camelCaseFirstCharacterMatch, match => match.replace('-', '').toLocaleUpperCase());
}
