import { type Expression, type Identifier, type MethodDeclaration, type NodeFactory } from 'typescript';
import { createLifecycleCallbackMethod } from './create-lifecycle-callback-method';

/**
 * Creates a connectedCallback method declaration
 * ```ts
 * connectedCallback(): void {
 *   subjectExpression.next({ type: 'connected' });
 * }
 * ```
 * @param factory TypeScript node factory
 * @param subjectExpression Subject expression
 * @returns Method declaration and identifier
 */
export function createConnectedCallbackMethod(
  factory: NodeFactory,
  subjectExpression: Expression
): [MethodDeclaration, Identifier] {
  return createLifecycleCallbackMethod(factory, 'connectedCallback', subjectExpression, 'connected');
}
