import { type OperatorFunction } from './operator-function';

/**
 * Operator function that emits the same time it receives from the source
 *
 * @template ValueType Value type
 */
export type MonoTypeOperatorFunction<ValueType> = OperatorFunction<ValueType, ValueType>;
