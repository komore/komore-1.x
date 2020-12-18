import { Observable, pipe, UnaryFunction } from 'rxjs';

/**
 * Executes a statement
 * @param statement Statement
 * @param parameters Parameters
 */
export function executeStatement<P extends Record<string, any>>(statement: string, parameters: P): UnaryFunction<Observable<any>, Observable<any>> {
  return pipe();
}
