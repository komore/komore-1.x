import { pipe, type OperatorFunction } from '@komore/reactive';

/**
 * Executes a statement
 * @param statement Statement
 * @param parameters Parameters
 */
export function executeStatement<P extends Record<string, any>>(
  statement: string,
  parameters: P
): OperatorFunction<unknown, unknown> {
  return pipe();
}
