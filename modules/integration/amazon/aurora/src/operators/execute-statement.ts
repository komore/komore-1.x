import { type UnaryFunction } from '@komore/functional';
import { type Observable, pipe } from '@komore/reactive';

/**
 * Executes a statement
 * @param statement Statement
 * @param parameters Parameters
 */
export function executeStatement<P extends Record<string, any>>(statement: string, parameters: P): UnaryFunction<Observable<any>, Observable<any>> {
  return pipe();
}
