import { type CallExpression, type NodeFactory } from 'typescript';
import { type ElementDefinition } from '../definition/element-definition';

/**
 * Creates a call to define a custom element with the custom element registry, via a proxy
 *
 * For normal custom elements, no option gets passed:
 * ```ts
 * proxyName(customElementName, CustomElement);
 * ```
 *
 * For custom elements that extend a built-in element, an option gets passed:
 * ```ts
 * proxyName(customElementName, CustomElement, {
 *   extends: 'base'
 * });
 * ```
 * @param factory TypeScript node factory
 * @param elementDefinition Element definition
 * @returns Call expression
 */
export function createProxiedDefineCustomElementCall(
  factory: NodeFactory,
  proxyName: string,
  elementDefinition: ElementDefinition
): CallExpression {}
