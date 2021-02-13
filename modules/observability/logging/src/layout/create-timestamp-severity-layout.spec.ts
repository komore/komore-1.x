import { advanceTo } from 'jest-date-mock';
import { createLogEvent } from '../create-log-event';
import { createLogGroup } from '../create-log-group';
import type { UntypedLogEventRecord } from '../log-event-record';
import { createTimestampSeverityLayout } from './create-timestamp-severity-layout';

describe('Create timestamp severity layout', () => {
  advanceTo(4242424242420);
  const logGroup = createLogGroup('test-group');
  const logEventCreator = createLogEvent(logGroup, 1, 100, 'test-message');
  const logEvent = logEventCreator({ testProperty: 'test-property' });
  const logEventRecord: UntypedLogEventRecord = {
    logContext: {
      testContext: 'test-context'
    },
    logEvent,
    message: logEvent.message,
    timestamp: logEvent.timestamp
  };

  it('can transform a log event record to a specific timestamp severity layout', () => {
    given: 'a timestamp severity layout';
    const layout = createTimestampSeverityLayout();
    when: 'transforming the log event record';
    const result = layout(logEventRecord);
    expect: 'the transformed log event record to have the right layout with a timestamp and a severity';
    expect(result).toBe('2104-06-09T03:10:42.420Z DEBUG test-message');
  });

  it('can transform a log event record with custom severity names', () => {
    given: 'a timestamp severity layout';
    const layout = createTimestampSeverityLayout({
      severityNames: new Map([[100, 'CustomSeverity']])
    });
    when: 'transforming the log event record';
    const result = layout(logEventRecord);
    expect: 'the transformed log event record to have a custom severity';
    expect(result).toBe('2104-06-09T03:10:42.420Z CustomSeverity test-message');
  });

  it('uses the severity level numerical value when there is no matching severity name', () => {
    given: 'a timestamp severity layout with severity names that cannot match the log event record';
    const layout = createTimestampSeverityLayout({
      severityNames: new Map()
    });
    when: 'transforming the log event record';
    const result = layout(logEventRecord);
    expect: 'the transformed log event record to a numerical severity';
    expect(result).toBe('2104-06-09T03:10:42.420Z 100 test-message');
  });
});
