import type { HTMLElement } from 'node-html-parser';
import { ElementDefinition } from './element-definition';
import { getElementBaseClassInfo } from './get-element-base-class-info';
import { getElementClassName } from './get-element-class-name';
import { getElementTagName } from './get-element-tag-name';

/**
 * Gets an element's definition
 * @param templateElement Template element
 * @param scriptElements Script elements
 * @returns Element definition
 */
export function getElementDefinition(
  templateElement: HTMLElement,
  scriptElements: ReadonlyArray<HTMLElement>
): ElementDefinition {
  const baseInfo = getElementBaseClassInfo(templateElement);
  const className = getElementClassName(scriptElements, templateElement);
  const tagName = getElementTagName(templateElement);
  return {
    ...baseInfo,
    className,
    tagName
  };
}
