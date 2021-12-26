import { type Observable } from '@komore/reactive';
import { type ConstraintViolationError } from './error/constraint-violation-error';

/**
 * Validator
 * @template T Validated type
 */
export interface Validator<T> {
  (value: T): Observable<ReadonlyArray<ConstraintViolationError<Record<string, unknown>>>>;
}
