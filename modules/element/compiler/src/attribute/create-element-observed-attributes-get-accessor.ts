import type { GetAccessorDeclaration, NodeFactory } from 'typescript';
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
): GetAccessorDeclaration {
  const constType = factory.createTypeReferenceNode('const');
  const attributeNames = elementAttributes.map(({ attributeName }) => factory.createStringLiteral(attributeName));
  const attributeNameArray = factory.createArrayLiteralExpression(attributeNames, true);
  const attributeNameConstArray = factory.createAsExpression(attributeNameArray, constType);
  const block = factory.createBlock([factory.createReturnStatement(attributeNameConstArray)], true);
  return factory.createGetAccessorDeclaration(
    undefined,
    [factory.createModifier(SyntaxKind.StaticKeyword)],
    'observedAttributes',
    [],
    undefined,
    block
  );
}
