import { map, of, type Observable } from '@komore/reactive';
import { createValidationContext } from './context/create-validation-context';
import { type ValidationContext } from './context/validation-context';
import { type Validator } from './validator';

/**
 * Creates a validator
 *
 * @param project Projection
 * @returns Validator
 * @template InputType Input type
 * @template OutputType Output type
 */
export function createValidator<InputType = unknown, OutputType = InputType>(
  project: (value: Observable<ValidationContext<InputType>>) => Observable<ValidationContext<OutputType>>
): Validator<InputType, OutputType> {
  return value => {
    const context = createValidationContext(value);
    const context$ = of(context);
    return project(context$).pipe(
      // TODO: catchError(),
      map(validatedContext => validatedContext.value)
    );
  };
}
