import type { MonoTypeOperatorFunction, OperatorFunction } from '@komore/reactive';
import { assertThat } from '@komore/reactive';
import { ConstraintViolationError } from './error/constraint-violation-error';

/**
 * Creates a constraint validator that asserts the type of the validated value
 * @param constraint Constraint test function
 * @param messageId Message identifier
 * @param constraint Constraints
 */
export function createConstraintValidator<
  T,
  R extends T,
  Constraints extends Record<string, unknown> | undefined = undefined
>(constraint: (value: T) => value is R, messageId: string, constraints?: Constraints): OperatorFunction<T, R>;

/**
 * Creates a constraint validator
 * @param constraint Constraint test function
 * @param messageId Message identifier
 * @param constraints Constraints
 */
export function createConstraintValidator<T, Constraints extends Record<string, unknown> | undefined = undefined>(
  constraint: (value: T) => boolean,
  messageId: string,
  constraints?: Constraints
): MonoTypeOperatorFunction<T>;

export function createConstraintValidator<
  T,
  R extends T = T,
  Constraints extends Record<string, unknown> | undefined = undefined
>(
  constraint: ((value: T) => value is R) | ((value: T) => boolean),
  messageId: string,
  constraints?: Constraints
): OperatorFunction<T, R> {
  return assertThat<T, R>(
    constraint as (value: T) => value is R,
    () => new ConstraintViolationError(messageId, constraints)
  );
}
