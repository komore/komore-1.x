import { createClientCommandEventMap } from '@komore/client';

import { type sqsCommand } from '../sqs.command';
import { type sqsEvent } from '../sqs.event';

/**
 * SQS client command-to-event map
 */
export const sqsClientCommandEventMap = createClientCommandEventMap<typeof sqsCommand, typeof sqsEvent>()({});
