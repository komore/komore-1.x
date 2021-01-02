import { createElementClass } from './create-element-class';
import { ElementDefinition } from './element-definition';
import { createCssTemplate } from './template/create-css-template';
import { createHtmlTemplate } from './template/create-html-template';
import { createElementTemplate } from './template/element-template';

/**
 * Defines an element
 * @param elementName Element name
 * @param elementDefinition Element definition
 * @returns Element template builder
 * @template ElementName Element name
 * @template BaseType Base type
 */
export function defineElement<
  ElementName extends string,
  BaseType extends HTMLElement = HTMLElement
>(
  elementDefinition: ElementDefinition<ElementName, BaseType, any, any, any>
): typeof HTMLElement {
  const definedCssTemplates = elementDefinition.styles?.({ css: createCssTemplate }) ?? [];
  const htmlTemplate = elementDefinition.template(({ html: createHtmlTemplate }));
  const cssTemplates = Array.isArray(definedCssTemplates) ? definedCssTemplates : [definedCssTemplates];
  const elementTemplate = createElementTemplate(elementDefinition, literals, ...placeholders);
  const extendsClass = elementDefinition.extends ?? HTMLElement;
  const elementClass = createElementClass(extendsClass, elementTemplate, cssTemplates);

  customElements.define(elementDefinition.name, elementClass);

  return elementClass;

}
