import type { GetAccessorDeclaration, Identifier, NodeFactory } from 'typescript';
import { SyntaxKind } from 'typescript';
import type { ElementAttributeDefinition } from '../definition/element-attribute-definition';

/**
 * Creates an element's observed attributes getter declaration
 * ```ts
 * static get observedAttributes() {
 *   return [
 *     'a',
 *     'b',
 *     'c'
 *   ] as const;
 * }
 * ```
 * @param factory TypeScript node factory
 * @param attributeNames Attribute names
 * @returns Observed attributes getter declaration
 */
export function createElementObservedAttributesGetAccessor(
  factory: NodeFactory,
  elementAttributes: ReadonlyArray<ElementAttributeDefinition>
): [GetAccessorDeclaration, Identifier] {
  const constType = factory.createTypeReferenceNode('const');
  const attributeNames = elementAttributes.map(({ attributeName }) => factory.createStringLiteral(attributeName, true));
  const attributeNameArray = factory.createArrayLiteralExpression(attributeNames, true);
  const attributeNameConstArray = factory.createAsExpression(attributeNameArray, constType);
  const block = factory.createBlock([factory.createReturnStatement(attributeNameConstArray)], true);
  const nameId = factory.createIdentifier('observedAttributes');
  const modifiers = [factory.createModifier(SyntaxKind.StaticKeyword)];
  const declaration = factory.createGetAccessorDeclaration(undefined, modifiers, nameId, [], undefined, block);
  return [declaration, nameId];
}
