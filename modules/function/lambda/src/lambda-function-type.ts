import { FunctionType } from '@komore/function';
import { Message } from '@komore/message';
import { LambdaFunctionInput } from './lambda-function-input';
import { LambdaFunctionOutput } from './lambda-function-output';

/**
 * Lambda function type
 * @template FP Function parameters type
 * @template R Result type
 */
export type LambdaFunctionType<FP extends object, R> = FunctionType<
  LambdaFunctionInput<FP>,
  LambdaFunctionOutput<R>,
  Message<T, P>
>;
