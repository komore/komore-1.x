import { type Observable } from '@komore/reactive';
import { type Validator } from './validator';

/**
 * Creates a function that validates a value using a validator
 *
 * @param validator Validator
 * @returns Function that validates a value using the validator
 */
export function validateWith<InputType, OutputType>(
  validator: Validator<InputType, OutputType>
): (value: InputType) => Observable<OutputType> {
  return value => validator(value);
}
