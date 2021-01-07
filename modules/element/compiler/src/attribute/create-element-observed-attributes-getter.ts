import type { GetAccessorDeclaration, NodeFactory } from 'typescript';
import { SyntaxKind } from 'typescript';

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
export function createElementObservedAttributesGetter(
  factory: NodeFactory,
  attributeNames: ReadonlyArray<string>
): GetAccessorDeclaration {
  const constType = factory.createTypeReferenceNode('const');
  const attributeNameLiterals = attributeNames.map(attributeName => factory.createStringLiteral(attributeName));
  const attributeNameArray = factory.createArrayLiteralExpression(attributeNameLiterals, true);
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
