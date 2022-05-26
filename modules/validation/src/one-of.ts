import { type ConstraintValidator } from './constraint-validator';
import { createConstraintValidator } from './create-constraint-validator';

export function oneOf<InputType, OutputType extends ReadonlyArray<InputType>>(
  ...possibleValues: ReadonlyArray<OutputType[number]>
): ConstraintValidator<InputType, OutputType[number]> {
  return createConstraintValidator((value): value is OutputType[number] => possibleValues.includes(value), 'one-of', {
    possibleValues,
  });
}
