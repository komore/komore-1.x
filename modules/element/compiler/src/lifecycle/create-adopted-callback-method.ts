import type { Expression, Identifier, MethodDeclaration, NodeFactory } from 'typescript';
import { createLifecycleCallbackMethod } from './create-lifecycle-callback-method';

/**
 * Creates an adoptedCallback method declaration
 * ```ts
 * adoptedCallback(): void {
 *   subjectExpression.next({ type: 'adopted' });
 * }
 * ```
 * @param factory TypeScript node factory
 * @param subjectExpression Subject expression
 * @returns Method declaration and identifier
 */
export function createAdoptedCallbackMethod(
  factory: NodeFactory,
  subjectExpression: Expression
): [MethodDeclaration, Identifier] {
  return createLifecycleCallbackMethod(factory, 'adoptedCallback', subjectExpression, 'adopted');
}
