import { cloudWatchDomain } from '@komore/aws/cloudwatch';
import { createEventType } from '@komore/event';

/**
 * CloudWatch event
 */
export const cloudWatchEvent = createEventType(cloudWatchDomain, {});
