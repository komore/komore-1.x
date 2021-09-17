import { createLogEvent } from '../definition/create-log-event';
import { createLogGroup } from '../definition/create-log-group';
import type { UntypedLogEventRecord } from '../definition/log-event-record';
import type { LogEventSeverity } from '../definition/log-event-severity';
import { createThresholdFilter } from './create-threshold-filter';
import { FilterResult } from './filter-result';

describe('Create threshold filter', () => {
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
  const logEventRecordAbove = createLogEventRecord(1, 43);
  const logEventRecordBelow = createLogEventRecord(1, 41);

  it('creates a filter that accepts log event records with a severity at least as high as the specified one', () => {
    given: 'a threshold filter';
    const filter = createThresholdFilter(logEventRecord.logEvent.severity);
    expect: 'a severity matching the specified severity to be ignored';
    expect(filter(logEventRecord)).toBe(FilterResult.NEUTRAL);
    and: 'a severity above the specified severity to be ignored';
    expect(filter(logEventRecordAbove)).toBe(FilterResult.NEUTRAL);
    and: 'a severity below the specified severity to be rejected';
    expect(filter(logEventRecordBelow)).toBe(FilterResult.REJECT);
  });
});
