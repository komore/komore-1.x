import { createAwsEventType } from '@komore/aws';

import { auroraDomain } from './aurora.domain';

/**
 * Aurora event
 */
export const auroraEvent = createAwsEventType(auroraDomain, {});
