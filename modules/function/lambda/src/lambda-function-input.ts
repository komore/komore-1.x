import { FunctionInput } from '@komore/function';
import { Context } from 'aws-lambda';
import { UnknownLambdaEvent } from './unknown-lambda-event';

/**
 * Lambda function input
 */
export type LambdaFunctionInput = FunctionInput<UnknownLambdaEvent, Context>;
