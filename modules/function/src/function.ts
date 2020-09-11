import { FunctionInput, FunctionInputContextType, FunctionInputParametersType } from './function-input';
import { FunctionOutput, FunctionOutputType } from './function-output';

/**
 * Function
 * @param parameters Parameters
 * @param context Context
 * @returns Promise that resolves to the result
 * @template FI Function input type
 * @template FO Function output type
 */
export type Function<FI extends FunctionInput<any, any>[], FO extends FunctionOutput<any>[]> = (
  parameters: FunctionInputParametersType<FI>,
  context: FunctionInputContextType<FI>
) => Promise<FunctionOutputType<FO>>;
