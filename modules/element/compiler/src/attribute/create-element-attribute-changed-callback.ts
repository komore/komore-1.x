import { createObjectLiteral, createParameter, createPropertyAccess } from '@komore/typescript/compiler';
import { type Block, type Expression, type Identifier, type MethodDeclaration, type NodeFactory } from 'typescript';
import { SyntaxKind } from 'typescript';

/**
 * Creates an attributeChangedCallback method declaration
 * ```ts
 * attributeChangedCallback(attributeName: string, oldValue: string | null, newValue: string | null): void {
 *   subjectExpression.next({
 *     attributeName,
 *     newValue,
 *     oldValue
 *   });
 * }
 * ```
 * @param factory TypeScript node factory
 * @param subjectExpression Subject expression
 * @returns Method declaration and identifier
 */
export function createElementAttributeChangedCallback(
  factory: NodeFactory,
  subjectExpression: Expression
): [MethodDeclaration, Identifier] {
  const methodName = 'attributeChangedCallback';
  const methodNameId = factory.createIdentifier(methodName);
  const string = factory.createKeywordTypeNode(SyntaxKind.StringKeyword);
  const stringOrNull = [string, factory.createLiteralTypeNode(factory.createNull())];
  const [attributeNameParameter, attributeName] = createParameter(factory, 'attributeName', string);
  const [oldValueParameter, oldValue] = createParameter(factory, 'oldValue', stringOrNull);
  const [newValueParameter, newValue] = createParameter(factory, 'newValue', stringOrNull);
  const parameters = [attributeNameParameter, oldValueParameter, newValueParameter];
  const block = createAttributeChangedCallbackBlock(factory, subjectExpression, attributeName, newValue, oldValue);
  const type = factory.createKeywordTypeNode(SyntaxKind.VoidKeyword);
  const methodDeclaration = factory.createMethodDeclaration(
    undefined,
    undefined,
    undefined,
    methodNameId,
    undefined,
    undefined,
    parameters,
    type,
    block
  );
  return [methodDeclaration, methodNameId];
}

/**
 * Creates the attributeChangedCallback method body
 * ```ts
 * subjectExpression.next({
 *   attributeName,
 *   newValue,
 *   oldValue
 * });
 * ```
 * @param factory TypeScript node factory
 * @param subjectExpression Subject expression
 * @param attributeName Attribute name parameter identifier
 * @param newValue New value parameter identifier
 * @param oldValue Old value parameter identifier
 * @returns Method body
 */
function createAttributeChangedCallbackBlock(
  factory: NodeFactory,
  subjectExpression: Expression,
  attributeName: Identifier,
  newValue: Identifier,
  oldValue: Identifier
): Block {
  const subjectNext = createPropertyAccess(factory, subjectExpression, 'next');
  const elementAttributeChangedEvent = createObjectLiteral(factory, attributeName, newValue, oldValue);
  const subjectNextCall = factory.createCallExpression(subjectNext, undefined, [elementAttributeChangedEvent]);
  const subjectNextCallStatement = factory.createExpressionStatement(subjectNextCall);
  return factory.createBlock([subjectNextCallStatement], true);
}
