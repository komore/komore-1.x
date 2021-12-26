import { createExtendsKeyof, createParameter } from '@komore/typescript/compiler';
import { type MethodSignature, type NodeFactory, SyntaxKind, type TypeReferenceNode } from 'typescript';

/**
 * Creates a setProperty method signature
 * ```ts
 * setProperty<K extends keyof CustomPropertyMap>(customProperty: K, value: CustomPropertyMap[K] | null): void;
 * ```
 * @param factory TypeScript node factory
 * @param customPropertyMap Custom property map type reference
 * @returns Method signature
 */
export function createElementCustomCSSStyleSeclarationSetPropertyMethod(
  factory: NodeFactory,
  customPropertyMap: TypeReferenceNode
): MethodSignature {
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
