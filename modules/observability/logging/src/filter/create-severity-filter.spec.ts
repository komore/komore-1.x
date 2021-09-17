import { createLogEvent } from '../definition/create-log-event';
import { createLogGroup } from '../definition/create-log-group';
import type { UntypedLogEventRecord } from '../definition/log-event-record';
import type { LogEventSeverity } from '../definition/log-event-severity';
import { createSeverityFilter } from './create-severity-filter';
import { FilterResult } from './filter-result';

describe('Create severity filter', () => {
  const logGroup = createLogGroup('test-group');

  function createLogEventRecord(id: number, severity: LogEventSeverity): UntypedLogEventRecord {
    const logEventCreator = createLogEvent(logGroup, id, severity, 'test-message');
    const logEvent = logEventCreator();
    return {
      logContext: {},
      logEvent,
      message: logEvent.message,
      timestamp: logEvent.timestamp
    };
  }

  const logEventRecord = createLogEventRecord(1, 42);
  const logEventRecordMismatch = createLogEventRecord(2, 41);

  it('creates a filter that accepts the specified severity and rejects any other severity by default', () => {
    given: 'a severity filter';
    const filter = createSeverityFilter(logEventRecord.logEvent.severity);
    expect: 'a severity matching the specified severity to be accepted';
    expect(filter(logEventRecord)).toBe(FilterResult.ACCEPT);
    and: 'a severity that does not match the specified severity to be rejected';
    expect(filter(logEventRecordMismatch)).toBe(FilterResult.REJECT);
  });

  it('creates a filter that can returns the correct result when matching the specified severity level', () => {
    given: 'expected match and mismatch results';
    const onMatch = FilterResult.NEUTRAL;
    const onMismatch = FilterResult.ACCEPT;
    and: 'a severity filter';
    const filter = createSeverityFilter(logEventRecord.logEvent.severity, {
      onMatch,
      onMismatch
    });
    expect: 'the filter to return the defined result on match and mismatch';
    expect(filter(logEventRecord)).toBe(onMatch);
    expect(filter(logEventRecordMismatch)).toBe(onMismatch);
  });
});
