import { ElementDefinition } from './definition/element-definition';
import { createElementTemplate, ElementTemplateResolver } from './template/element-template';
import { KomoreElement } from './komore-element';

type ElementTemplateBuilder<State> = <T extends ElementTemplateResolver<State>[]>(
  literals: TemplateStringsArray,
  ...placeholders: T
) => KomoreElement;

/**
 * Defines an element
 * @param elementName Element name
 * @param elementDefinition Element definition
 * @returns Element template builder
 * @template ElementName Element name
 * @template ElementDefinitionType Element definition type
 */
export function defineElement<ElementName extends string, ElementDefinitionType extends ElementDefinition<any, any, any, any>>(
  elementName: ElementName,
  elementDefinition: ElementDefinitionType
): ElementTemplateBuilder<ElementDefinitionType> {
  const komoreElement = new KomoreElement();
  const shadowRoot = komoreElement.shadowRoot;

  const template = document.createElement('template');
  const instance = template.content.cloneNode(true);

  class KomoreElementClass extends KomoreElement {}

  customElements.define(elementName, KomoreElementClass);

  return (literals, ...placeholders) => {
    createElementTemplate(elementDefinition, literals, ...placeholders);
    return new KomoreElement();
  };
}
