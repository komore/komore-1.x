import { CloudWatchLogsGroupName, cloudWatchLogsDomain } from '@komore/aws/cloudwatch/logs';
import { createEventType, eventProperties } from '@komore/event';

/**
 * CloudWatch Logs event
 */
export const cloudWatchLogsEvent = createEventType(cloudWatchLogsDomain, {
  logGroupCreated: eventProperties<unknown>(),
  logEventPut: eventProperties<{
    /**
     * Events
     */
    readonly events: ReadonlyArray<unknown>;
    /**
     * Log group name
     */
    readonly groupName: CloudWatchLogsGroupName;
  }>(),
});
