import { createLogEvent } from '../event/create-log-event';
import { type LogEventSeverity } from '../event/log-event-severity';
import { type UntypedLogEventRecord } from '../event-record/log-event-record';
import { createLogGroup } from '../group/create-log-group';
import { createThresholdLogFilter } from './create-threshold-log-filter';

describe('Create threshold filter', () => {
  const logGroup = createLogGroup('test-group');

  function createLogEventRecord(id: number, severity: LogEventSeverity): UntypedLogEventRecord {
    const logEventCreator = createLogEvent(logGroup, id, severity, 'test-message');
    const logEvent = logEventCreator();
    return {
      logContext: {},
      logEvent,
      message: logEvent.message,
      timestamp: logEvent.timestamp,
    };
  }

  const logEventRecord = createLogEventRecord(1, 42);
  const logEventRecordAbove = createLogEventRecord(1, 43);
  const logEventRecordBelow = createLogEventRecord(1, 41);

  it('creates a filter that accepts log event records with a severity at least as high as the specified one', () => {
    given: 'a threshold filter';
    const filter = createThresholdLogFilter(logEventRecord.logEvent.severity);

    expect: 'a severity matching the specified severity to be ignored';
    expect(filter(logEventRecord)).toBe('neutral');
    and: 'a severity above the specified severity to be ignored';
    expect(filter(logEventRecordAbove)).toBe('neutral');
    and: 'a severity below the specified severity to be rejected';
    expect(filter(logEventRecordBelow)).toBe('reject');
  });
});
