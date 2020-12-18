import { Observable } from 'rxjs';
import { ElementDefinition } from '../definition/element-definition';
import { buildTemplateContent } from './build-template-content';

/**
 * Element template resolver
 * @template ElementDefinitionType Element definition type
 */
export type ElementTemplateResolver<ElementDefinitionType extends ElementDefinition<any, any, any, any>> =
  | string
  | number
  | boolean
  | Observable<unknown>
  | ((element: unknown) => ElementTemplateResolver<ElementDefinitionType>);

/**
 * Element template
 */
export type ElementTemplate<E extends HTMLElement, T extends ElementTemplateResolver<E>[]> = Readonly<{
  templateElement: HTMLTemplateElement;
  placeholders: T;
}>;

/**
 * Creates an element template
 * @param elementDefinition Element definition
 * @param literals Template string literals
 * @param placeholders Placeholders
 * @returns Element template
 * @template ElementDefinitionType Element definition type
 * @template State State schema type
 * @template T Placeholder types
 */
export function createElementTemplate<
  ElementType extends HTMLElement,
  ElementDefinitionType extends ElementDefinition<any, any, any, any>,
  T extends ElementTemplateResolver<ElementDefinitionType>[]
>(elementDefinition: ElementDefinitionType, literals: TemplateStringsArray, ...placeholders: T): ElementTemplate<ElementType, T> {
  const templateContent = buildTemplateContent(literals);
  const templateElement = buildTemplateElement(templateContent);

  return {
    templateElement,
    placeholders
  };
}
