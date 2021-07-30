import { createExtendsKeyof, createParameter } from '@komore/typescript/compiler';
import type { Identifier, InterfaceDeclaration, MethodSignature, NodeFactory, TypeReferenceNode } from 'typescript';
import { SyntaxKind } from 'typescript';

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
  const setProperty = createSetPropertyMethod(factory, customPropertyMap);
  const interfaceName = `${elementClassName}CSSStyleDeclaration`;
  const nameId = factory.createIdentifier(interfaceName);
  const members = [setProperty];
  const declaration = factory.createInterfaceDeclaration(undefined, undefined, nameId, undefined, undefined, members);
  return [declaration, nameId];
}

/**
 * Creates a setProperty method signature
 * ```ts
 * setProperty<K extends keyof CustomPropertyMap>(customProperty: K, value: CustomPropertyMap[K] | null): void;
 * ```
 * @param factory TypeScript node factory
 * @param customPropertyMap Custom property map type reference
 * @returns Method signature
 */
function createSetPropertyMethod(factory: NodeFactory, customPropertyMap: TypeReferenceNode): MethodSignature {
  const methodName = 'setProperty';
  const [kExtendsCustomPropertyMap, K] = createExtendsKeyof(factory, 'K', customPropertyMap);
  const [customPropertyName] = createParameter(factory, 'customProperty', K);
  const customPropertyType = factory.createIndexedAccessTypeNode(customPropertyMap, K);
  // TODO: factory.createKeywordTypeNode(SyntaxKind.NullKeyword);
  const nullType = factory.createTypeReferenceNode('null');
  const voidType = factory.createKeywordTypeNode(SyntaxKind.VoidKeyword);
  const customPropertyValueType = factory.createUnionTypeNode([customPropertyType, nullType]);
  const [customPropertyValue] = createParameter(factory, 'value', customPropertyValueType);
  const typeParameters = [kExtendsCustomPropertyMap];
  const parameters = [customPropertyName, customPropertyValue];
  return factory.createMethodSignature(undefined, methodName, undefined, typeParameters, parameters, voidType);
}
