import { type Observable } from '@komore/reactive';

/**
 * Validates a value
 *
 * @throws {@link ValidationError} if constraint violations are encountered
 * @template InputType Input type
 * @template ValidatedType Validated type
 */
export interface Validator<InputType, ValidatedType = InputType> {
  (value: InputType): Observable<ValidatedType>;
}
