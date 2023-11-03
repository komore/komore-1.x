import { createAwsEventType } from '@komore/aws';

import { pollyDomain } from './polly.domain';

/**
 * Polly event
 */
export const pollyEvent = createAwsEventType(pollyDomain, {});
