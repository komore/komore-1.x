import { createLogEvent } from '../definition/create-log-event';
import { createLogGroup } from '../definition/create-log-group';
import { type UntypedLogEventRecord } from '../definition/log-event-record';
import { type LogEventSeverity } from '../definition/log-event-severity';
import { createSeverityLogFilter } from './create-severity-log-filter';

describe('Create severity log filter', () => {
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
  const logEventRecordMismatch = createLogEventRecord(2, 41);

  it('creates a filter that accepts the specified severity and rejects any other severity by default', () => {
    given: 'a severity filter';
    const filter = createSeverityLogFilter(logEventRecord.logEvent.severity);

    expect: 'a severity matching the specified severity to be accepted';
    expect(filter(logEventRecord)).toBe('accept');

    and: 'a severity that does not match the specified severity to be rejected';
    expect(filter(logEventRecordMismatch)).toBe('reject');
  });

  it('creates a filter that can returns the correct result when matching the specified severity level', () => {
    given: 'expected match and mismatch results';
    const onMatch = 'neutral';
    const onMismatch = 'accept';
    and: 'a severity filter';
    const filter = createSeverityLogFilter(logEventRecord.logEvent.severity, {
      onMatch,
      onMismatch,
    });

    expect: 'the filter to return the defined result on match and mismatch';
    expect(filter(logEventRecord)).toBe(onMatch);
    expect(filter(logEventRecordMismatch)).toBe(onMismatch);
  });
});
