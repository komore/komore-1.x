import { type LambdaEventClientContext } from '@komore/aws/lambda';

/**
 * Creates a test Lambda event client context
 *
 * @param clientContext Client context
 * @returns Test Lambda event client context
 */
export function createTestLambdaEventClientContext(
  clientContext?: Partial<LambdaEventClientContext>
): LambdaEventClientContext {
  return {};
}
