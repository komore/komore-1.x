import { type MonoTypeOperatorFunction, type OperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive';
import { ConstraintViolationError } from '@komore/validation';

export function constraint<T, R extends T, Constraints extends Record<string, unknown> | undefined = undefined>(
  constraint: (value: T) => value is R,
  messageId: string,
  constraints?: Constraints
): OperatorFunction<T, R>;

export function constraint<T, Constraints extends Record<string, unknown> | undefined = undefined>(
  constraint: (value: T) => boolean,
  messageId: string,
  constraints?: Constraints
): MonoTypeOperatorFunction<T>;

export function constraint<T, R extends T, Constraints extends Record<string, unknown> | undefined = undefined>(
  constraint: ((value: T) => value is R) | ((value: T) => boolean),
  messageId: string,
  constraints?: Constraints
): OperatorFunction<T, R> {
  return map(value => {
    if (constraint(value)) {
      return value;
    }

    throw new ConstraintViolationError(messageId, constraints);
  });
}
