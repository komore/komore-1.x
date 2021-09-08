import type { OperatorFunction } from '@komore/reactive';
import { map, pipe } from '@komore/reactive/operators';
import { constraint } from './constraint';

/**
 * Date constraint options
 */
export interface DateConstraintOptions {
  /**
   * When set to `true`, numbers get converted to a date before performing the constraint validation
   */
  readonly convertNumbers?: boolean;
  /**
   * When set to `true`, strings get converted to a date before performing the constraint validation
   */
  readonly convertStrings?: boolean;
}

/**
 * Validates that emitted values are dates
 *
 * @param options Date constraint options
 * When emitted values are numbers or strings, they get converted to dates
 */
export function date(options?: DateConstraintOptions): OperatorFunction<unknown, Date> {
  const convertNumbers = options?.convertNumbers ?? false;
  const convertStrings = options?.convertStrings ?? false;
  const constraintValidator = constraint((value: unknown): value is Date => value instanceof Date, 'date');

  if (!convertNumbers && !convertStrings) {
    return constraintValidator;
  }

  return pipe(
    map(value => {
      if ((convertNumbers && typeof value === 'number') || (convertStrings && typeof value === 'string')) {
        const dateValue: Date = new Date(value);
        if (!isNaN(dateValue.getTime())) {
          return dateValue;
        }
      }

      return value;
    }),
    constraintValidator
  );
}
