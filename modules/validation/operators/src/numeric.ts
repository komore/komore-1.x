import type { MonoTypeOperatorFunction, OperatorFunction } from '@komore/reactive';
import { pipe } from '@komore/reactive';
import { map } from '@komore/reactive/operators';
import { constraint } from './constraint';

/**
 * Numeric validation options
 */
export interface NumericValidationOptions {
  readonly convertStrings?: boolean;
  readonly integer?: boolean;
}

/**
 * Constraint validation operator that tests whether an emitted value is a number
 * @param options Numeric validation options
 */
export function numeric(options?: Partial<NumericValidationOptions>): OperatorFunction<unknown, number> {
  const convertStrings = options?.convertStrings ?? false;
  const integer = options?.integer ?? false;
  const numberConstraint = constraint(
    (value): value is number => typeof value === 'number' && (!integer || Number.isInteger(value)),
    'numeric'
  );

  if (convertStrings) {
    return pipe(tryConvertString(), numberConstraint);
  }

  return numberConstraint;
}

function tryConvertString(): MonoTypeOperatorFunction<unknown> {
  return map(value => {
    if (typeof value === 'string') {
      const parsedValue = parseFloat(value);
      if (!isNaN(parsedValue)) {
        return parsedValue;
      }
    }

    return value;
  });
}
