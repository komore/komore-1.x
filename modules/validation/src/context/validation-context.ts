import { type ReadonlyRecord } from '@komore/typescript';

import { type ConstraintViolationError } from '../error/constraint-violation-error';
import { type NowProvider } from '../temporal/now-provider';

/**
 * Validation context
 *
 * @template ValueType Value type
 */
export interface ValidationContext<ValueType> {
  /**
   * Constraint violation errors
   */
  readonly constraintViolations: Array<ConstraintViolationError<ReadonlyRecord<string, never>>>;
  /**
   * Property path
   */
  readonly propertyPath: string;
  /**
   * Providers
   */
  readonly providers: {
    /**
     * Now provider
     */
    readonly now: NowProvider;
  };
  /**
   * Value
   */
  readonly value: ValueType;
}
