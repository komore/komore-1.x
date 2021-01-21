import type { Identifier, NodeFactory, PropertySignature, TypeReferenceNode } from 'typescript';

/**
 * Creates an element style property
 * ```ts
 * readonly style: CSSStyleDeclaration & ElementCssStyleDeclaration;
 * ```
 * @param factory TypeScript node factory
 * @param elementCssStyleDeclaration Element CSS style declaration
 * @returns Property signature and identifier
 */
export function createElementStyleProperty(
  factory: NodeFactory,
  elementCssStyleDeclaration: TypeReferenceNode
): [PropertySignature, Identifier] {
  const nameId = factory.createIdentifier('style');
  const cssStyleDeclaration = factory.createTypeReferenceNode('CSSStyleDeclaration');
  const propertyType = factory.createIntersectionTypeNode([cssStyleDeclaration, elementCssStyleDeclaration]);
  const propertySignature = factory.createPropertySignature(undefined, nameId, undefined, propertyType);
  return [propertySignature, nameId];
}
