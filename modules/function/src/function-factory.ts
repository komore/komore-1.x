import { FunctionConfiguration } from './function-configuration';
import { FunctionInput } from './function-input';
import { FunctionOutput } from './function-output';
import { Message } from './message';
import { PipeableFunction } from './pipeable-function';

export type FunctionFactory<FI extends FunctionInput<any, any>[], FO extends FunctionOutput<any>[], M extends Message<any, any>[]> = Readonly<{
  (): PipeableFunction<FI, FO, M>;
  configuration: FunctionConfiguration<FI, FO, M>;
}>;
