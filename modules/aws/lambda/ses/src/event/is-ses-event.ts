import { createLambdaEventSourceTypeTest } from '@komore/aws/lambda';

import { type SesEvent } from './ses-event';

/**
 * Tests whether an event is an SES event
 *
 * @param event Event
 * @returns true if the event is an SES event
 */
export const isSesEvent = createLambdaEventSourceTypeTest<SesEvent>('aws:ses');
