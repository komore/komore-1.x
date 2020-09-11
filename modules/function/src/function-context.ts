import { FunctionConfiguration } from './function-configuration';
import { FunctionEnvironment } from './function-environment';

/**
 * Function context
 */
export type FunctionContext<M> = Readonly<{
  configuration: FunctionConfiguration<any>;
  environment: FunctionEnvironment;
  message: M;
}>;
