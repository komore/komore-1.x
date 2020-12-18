import { FunctionProvider } from './function-provider';

/**
 * Function environment
 */
export type FunctionEnvironment = Readonly<{
  functionName: string;
  functionVersion: string;
  memorySize: number;
  provider: FunctionProvider<any>;
  region: string;
}>;
