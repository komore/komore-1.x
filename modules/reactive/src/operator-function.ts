import type { UnaryFunction } from '@komore/functional';
import type { Observable } from './observable';

/**
 * Operator function
 * @template InputType Input type
 * @template OutputType Output type
 */
export type OperatorFunction<InputType, OutputType> = UnaryFunction<Observable<InputType>, Observable<OutputType>>;

/**
 * Operator function that emits the same time it receives from the source
 * @template ValueType Value type
 */
export type MonoTypeOperatorFunction<ValueType> = OperatorFunction<ValueType, ValueType>;
