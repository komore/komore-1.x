import { throwUnless, type OperatorFunction } from '@komore/reactive';
import { type ConstraintValidator } from './constraint-validator';
import { type ValidationContext } from './context/validation-context';
import { ConstraintViolationError } from './error/constraint-violation-error';

export function mustBe<InputType, OutputType extends InputType>(
  constraintValidator: ConstraintValidator<InputType, OutputType>
): OperatorFunction<ValidationContext<InputType>, ValidationContext<OutputType>> {
  // TODO: handle async validators
  const { constraints, messageId, test } = constraintValidator;
  return throwUnless(
    (ctx): ctx is ValidationContext<OutputType> => {
      const { value, ...context } = ctx;
      return test(value, context);
    },
    () => new ConstraintViolationError(messageId, constraints)
  );
}
