import { type Identifier, type InterfaceDeclaration, type NodeFactory, type TypeReferenceNode } from 'typescript';
import {
  createElementCustomCSSStyleSeclarationSetPropertyMethod
} from './create-element-css-style-declaration-set-property-method';

/**
 * Creates an element's custom CSSStyleDeclaration interface
 * ```ts
 * interface ElementClassNameCSSStyleDeclaration {
 *   setProperty<K extends keyof CustomPropertyMap>(customProperty: K, value: CustomPropertyMap[K] | null): void;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param elementClassName Element class name
 * @param customPropertyMap Custom property map type reference
 * @returns Interface declaration and identifier
 */
export function createElementCustomCSSStyleDeclaration(
  factory: NodeFactory,
  elementClassName: string,
  customPropertyMap: TypeReferenceNode
): [InterfaceDeclaration, Identifier] {
  const setProperty = createElementCustomCSSStyleSeclarationSetPropertyMethod(factory, customPropertyMap);
  const interfaceName = `${elementClassName}CSSStyleDeclaration`;
  const nameId = factory.createIdentifier(interfaceName);
  const members = [setProperty];
  const declaration = factory.createInterfaceDeclaration(undefined, undefined, nameId, undefined, undefined, members);
  return [declaration, nameId];
}
