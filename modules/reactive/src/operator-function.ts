import { type UnaryFunction } from '@komore/functional';

/**
 * Operator function
 *
 * @template InputType Input type
 * @template OutputType Output type
 */
export type OperatorFunction<InputType, OutputType> = UnaryFunction<Observable<InputType>, Observable<OutputType>>;
