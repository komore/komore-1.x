import { type LambdaTrigger } from '@komore/aws/lambda';

import { type SnsEvent } from './event/sns-event';
import { type SnsEventTriggerOptions } from './sns-event-trigger-options';

/**
 * Creates an SNS event trigger
 *
 * @param triggerOptions SNS event trigger options
 * @returns SNS event trigger
 */
export function snsEvent(_triggerOptions?: SnsEventTriggerOptions): LambdaTrigger<SnsEvent, void> {}
