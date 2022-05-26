import { type ConstraintValidator } from './constraint-validator';
import { type ValidationContext } from './context/validation-context';

/**
 * Creates a constraint validator that asserts the type of the validated value
 *
 * @param constraint Constraint test function
 * @param messageId Message identifier
 * @param constraint Constraints
 * @template InputType Input type
 * @template OutputType Output type
 * @template Constraints Constraints
 */
export function createConstraintValidator<
  InputType,
  OutputType extends InputType,
  Constraints extends Record<string, unknown> | undefined = undefined
>(
  constraint: (value: InputType, context: Omit<ValidationContext<InputType>, 'value'>) => value is OutputType,
  messageId: string,
  constraints?: Constraints
): ConstraintValidator<InputType, OutputType>;

/**
 * Creates a constraint validator
 *
 * @param constraint Constraint test function
 * @param messageId Message identifier
 * @param constraints Constraints
 * @template ValueType Value type
 */
export function createConstraintValidator<
  ValueType,
  Constraints extends Record<string, unknown> | undefined = undefined
>(
  constraint: (value: ValueType, context: Omit<ValidationContext<ValueType>, 'value'>) => boolean,
  messageId: string,
  constraints?: Constraints
): ConstraintValidator<ValueType, ValueType>;

export function createConstraintValidator<
  InputType,
  OutputType extends InputType = InputType,
  Constraints extends Record<string, unknown> | undefined = undefined
>(
  constraint: (value: InputType, context: Omit<ValidationContext<InputType>, 'value'>) => boolean,
  messageId: string,
  constraints?: Constraints
): ConstraintValidator<InputType, OutputType> {
  const test = constraint as (value: InputType) => value is OutputType;
  return constraints !== undefined
    ? {
        constraints,
        messageId,
        test,
      }
    : { messageId, test };
}
