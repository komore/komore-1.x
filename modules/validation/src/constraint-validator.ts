import { type ReadonlyRecord } from '@komore/typescript';
import { type ValidationContext } from './validation-context';

/**
 * Constraint validator
 *
 * @template InputType Input type
 * @template OutputType Output type
 */
export interface ConstraintValidator<InputType, OutputType extends InputType = InputType> {
  /**
   * Constraints
   */
  readonly constraints?: ReadonlyRecord<string, unknown>;
  /**
   * Message identifier
   */
  readonly messageId: string;
  /**
   * Test function
   */
  readonly test: (value: InputType, context: Omit<ValidationContext<InputType>, 'value'>) => value is OutputType;
}
