import { type ElementLifecycleEventType } from '@komore/element';
import { createObjectLiteral, createPropertyAccess } from '@komore/typescript/compiler';
import { type Expression, type Identifier, type MethodDeclaration, type NodeFactory, SyntaxKind } from 'typescript';

/**
 * Creates a lifecycle callback method
 * ```ts
 * methodName(): void {
 *   subjectExpression.next({
 *     type: 'elementLifecycleEventType'
 *   });
 * }
 * ```
 * @param factory TypeScript node factory
 * @param methodName Method name
 * @param subjectExpression Subject expression
 * @param elementLifecycleEventType Element lifecycle event type
 * @returns Method declaration and identifier
 */
export function createLifecycleCallbackMethod(
  factory: NodeFactory,
  methodName: string,
  subjectExpression: Expression,
  elementLifecycleEventType: ElementLifecycleEventType
): [MethodDeclaration, Identifier] {
  const nameId = factory.createIdentifier(methodName);
  const returnType = factory.createKeywordTypeNode(SyntaxKind.VoidKeyword);
  const eventTypeString = factory.createStringLiteral(elementLifecycleEventType, true);
  const nextProperty = createPropertyAccess(factory, subjectExpression, 'next');
  const elementLifecycleEvent = createObjectLiteral(factory, ['type', eventTypeString]);
  const nextCall = factory.createCallExpression(nextProperty, undefined, [elementLifecycleEvent]);
  const statement = factory.createExpressionStatement(nextCall);
  const block = factory.createBlock([statement], true);
  const methodDeclaration = factory.createMethodDeclaration(
    undefined,
    undefined,
    undefined,
    nameId,
    undefined,
    undefined,
    [],
    returnType,
    block
  );
  return [methodDeclaration, nameId];
}
