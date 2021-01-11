import type { Identifier, MethodDeclaration, NodeFactory, TypeReferenceNode } from 'typescript';
import { SyntaxKind } from 'typescript';
import { createExtendsKeyof } from '../codegen/create-extends-keyof';
import { createParameter } from '../codegen/create-parameter';

/**
 * Creates a watchAttribute method declaration
 * ```ts
 * watchAttribute<K extends keyof ElementAttributeMap>(name: K): Observable<ElementAttributeMap[K] | undefined> {
 *   return this._k_attr$[name];
 * }
 * ```
 * @param factory TypeScript node factory
 * @param attributeMap Attribute map
 * @returns Method declaration
 */
export function createWatchAttributeMethod(factory: NodeFactory, attributeMap: TypeReferenceNode): MethodDeclaration {
  const kExtendsAttributeMap = createExtendsKeyof(factory, 'K', attributeMap);
  const K = factory.createTypeReferenceNode(kExtendsAttributeMap.name);
  const attributeName = createParameter(factory, 'name', K);
  const attributeType = factory.createIndexedAccessTypeNode(attributeMap, K);
  const undefinedType = factory.createKeywordTypeNode(SyntaxKind.UndefinedKeyword);
  const attributeTypeOrUndefined = factory.createUnionTypeNode([attributeType, undefinedType]);
  const type = factory.createTypeReferenceNode('Observable', [attributeTypeOrUndefined]);
  const attributes = factory.createPropertyAccessExpression(factory.createThis(), '_ka');
  const elementAttribute = factory.createElementAccessExpression(attributes, attributeName.name as Identifier);
  const elementAttributeObservable = factory.createPropertyAccessExpression(elementAttribute, '$');
  const returnAttributeObservable = factory.createReturnStatement(elementAttributeObservable);
  const block = factory.createBlock([returnAttributeObservable], true);
  return factory.createMethodDeclaration(
    undefined,
    undefined,
    undefined,
    'watchAttribute',
    undefined,
    [kExtendsAttributeMap],
    [attributeName],
    type,
    block
  );
}
