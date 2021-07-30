import { createExtendsKeyof, createParameter } from '@komore/typescript/compiler';
import type { Identifier, MethodDeclaration, NodeFactory, TypeReferenceNode } from 'typescript';
import { SyntaxKind } from 'typescript';

/**
 * Creates a watchAttribute method declaration
 * ```ts
 * private watchAttribute<K extends keyof ElementAttributeMap>(name: K): Observable<ElementAttributeMap[K] | undefined> {
 *   return this._k_attr$[name];
 * }
 * ```
 * @param factory TypeScript node factory
 * @param attributeMap Attribute map
 * @returns Method declaration and identifier
 */
export function createWatchAttributeMethod(
  factory: NodeFactory,
  attributeMap: TypeReferenceNode
): [MethodDeclaration, Identifier] {
  const [kExtendsAttributeMap, K] = createExtendsKeyof(factory, 'K', attributeMap);
  const [nameParameter, name] = createParameter(factory, 'name', K);
  const attributeType = factory.createIndexedAccessTypeNode(attributeMap, K);
  const undefinedType = factory.createKeywordTypeNode(SyntaxKind.UndefinedKeyword);
  const attributeTypeOrUndefined = factory.createUnionTypeNode([attributeType, undefinedType]);
  const type = factory.createTypeReferenceNode('Observable', [attributeTypeOrUndefined]);
  const attributes = factory.createPropertyAccessExpression(factory.createThis(), '_ka');
  const elementAttribute = factory.createElementAccessExpression(attributes, name);
  const elementAttributeObservable = factory.createPropertyAccessExpression(elementAttribute, '$');
  const returnAttributeObservable = factory.createReturnStatement(elementAttributeObservable);
  const block = factory.createBlock([returnAttributeObservable], true);
  const modifiers = [factory.createModifier(SyntaxKind.PrivateKeyword)];
  const parameters = [nameParameter];
  const typeParameters = [kExtendsAttributeMap];
  const nameId = factory.createIdentifier('watchAttribute');
  const declaration = factory.createMethodDeclaration(
    undefined,
    modifiers,
    undefined,
    nameId,
    undefined,
    typeParameters,
    parameters,
    type,
    block
  );
  return [declaration, nameId];
}
