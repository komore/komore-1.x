import { FunctionProvider } from './function-provider';

/**
 * Function logger
 */
export type FunctionLogger = Pick<typeof console, 'debug' | 'error' | 'log' | 'warn'>;

/**
 * Function logger factory
 */
export type FunctionLoggerFactory = (name: string) => FunctionLogger;

/**
 * Function configuration
 * @template FP Function provider types
 */
export type FunctionConfiguration<FP extends FunctionProvider<any, any, any>[]> = Readonly<{
  loggerFactory?: FunctionLoggerFactory;
  providers: ReadonlyArray<FP[number]>;
}>;
