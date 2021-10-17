import { of } from '@komore/reactive';
import type { Validator } from './validator';
import type { ValidatorOptions } from './validator-options';

/**
 * Creates a validator
 * @param options Validator options
 * @returns Validator
 */
export function createValidator<T>(_options: ValidatorOptions): Validator<T> {
  return value => {
    return of([]);
  };
}
