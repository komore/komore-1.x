import { createAwsEventType } from '@komore/aws';

import { neptuneDomain } from './neptune.domain';

/**
 * Neptune event
 */
export const neptuneEvent = createAwsEventType(neptuneDomain, {});
