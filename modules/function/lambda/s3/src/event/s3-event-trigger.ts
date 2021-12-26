import { type FunctionTrigger } from '@komore/function';
import { type S3Event } from './s3-event';
import { type S3EventFunctionParameters } from './s3-event-function-parameters';
import { type S3EventTriggerOptions } from './s3-event-trigger-options';

/**
 * Allows a function to interpret events triggered by S3
 * @param options S3 event trigger options
 * @returns Function trigger
 */
export function s3EventTrigger(
  options?: S3EventTriggerOptions
): FunctionTrigger<S3EventFunctionParameters, void, S3Event, void> {

}
