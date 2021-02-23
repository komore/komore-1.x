import type { Observable } from './observable';

/**
 * Operator function
 * @template InputType Input type
 * @template OutputType Output type
 */
export interface OperatorFunction<InputType, OutputType> {
  (source: Observable<InputType>): Observable<OutputType>;
}

/**
 * Operator function that emits the same time it receives from the source
 * @template T Value type
 */
export type MonoTypeOperatorFunction<T> = OperatorFunction<T, T>;
