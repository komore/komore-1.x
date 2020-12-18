import { OperatorFunction } from 'rxjs';

/**
 * Flow
 * @template InputType Input type
 * @template OutputType Output type
 */
export type Flow<InputType, OutputType> = OperatorFunction<InputType, OutputType>;

/**
 * Flow input type
 * @template FlowType Flow type
 */
export type FlowInputType<FlowType extends Flow<any, any>> = FlowType extends Flow<infer InputType, any>
  ? InputType
  : never;

/**
 * Flow output type
 * @template FlowType Flow type
 */
export type FlowOutputType<FlowType extends Flow<any, any>> = FlowType extends Flow<any, infer OutputType>
  ? OutputType
  : never;
