import type { Expression, Identifier, MethodDeclaration, NodeFactory } from 'typescript';
import { createLifecycleCallbackMethod } from './create-lifecycle-callback-method';

/**
 * Creates a disconnectedCallback method declaration
 * ```ts
 * disconnectedCallback(): void {
 *   subjectExpression.next({ type: 'disconnected' });
 * }
 * ```
 * @param factory TypeScript node factory
 * @param subjectExpression Subject expression
 * @returns Method declaration and identifier
 */
export function createDisconnectedCallbackMethod(
  factory: NodeFactory,
  subjectExpression: Expression
): [MethodDeclaration, Identifier] {
  return createLifecycleCallbackMethod(factory, 'disconnectedCallback', subjectExpression, 'disconnected');
}
