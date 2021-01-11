import type { CallExpression, Expression, NodeFactory } from 'typescript';
import type { ElementDefinition } from '../definition/element-definition';

/**
 * Creates a call to define a custom element with the custom element registry
 *
 * For normal custom elements, no option gets passed:
 * ```ts
 * customElements.define(customElementName, CustomElement);
 * ```
 *
 * For custom elements that extend a built-in element, an option gets passed:
 * ```ts
 * customElements.define(customElementName, CustomElement, {
 *   extends: 'base'
 * });
 * ```
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @returns Call expression
 */
export function createDefineCustomElementCall(
  factory: NodeFactory,
  elementDefinition: ElementDefinition
): CallExpression {
  const { baseTagName, className, tagName } = elementDefinition;
  const customElements = factory.createIdentifier('customElements');
  const customElementsDefine = factory.createPropertyAccessExpression(customElements, 'define');
  const tagNameLiteral = factory.createStringLiteral(tagName);
  const constructor = factory.createIdentifier(className);
  const callParameters: Array<Expression> = [tagNameLiteral, constructor];

  if (baseTagName !== undefined) {
    const baseTagNameLiteral = factory.createStringLiteral(baseTagName);
    const extendsOption = factory.createPropertyAssignment('extends', baseTagNameLiteral);
    const options = factory.createObjectLiteralExpression([extendsOption]);
    callParameters.push(options);
  }

  return factory.createCallExpression(customElementsDefine, undefined, callParameters);
}
