import { FunctionInput } from '@komore/function';
import { Context } from 'aws-lambda';

/**
 * Lambda function input
 * @template P Parameter type
 */
export type LambdaFunctionInput<P extends object> = FunctionInput<P, Context>;
