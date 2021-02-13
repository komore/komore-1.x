import { createLogEvent } from '../create-log-event';
import { createLogGroup } from '../create-log-group';
import type { UntypedLogEventRecord } from '../log-event-record';
import { createSeverityFilter } from './create-severity-filter';
import { FilterResult } from './filter-result';

describe('Create severity filter', () => {
  const logGroup = createLogGroup('test-group');
  const logEventCreator = createLogEvent(logGroup, 1, 42, 'test-message');
  const logEventCreator2 = createLogEvent(logGroup, 2, 41, 'test-message');
  const logEvent = logEventCreator();
  const logEvent2 = logEventCreator2();
  const logEventRecord: UntypedLogEventRecord = {
    logContext: {},
    logEvent,
    message: logEvent.message,
    timestamp: logEvent.timestamp
  };
  const logEventRecord2: UntypedLogEventRecord = {
    logContext: {},
    logEvent,
    message: logEvent2.message,
    timestamp: logEvent2.timestamp
  };

  it('creates a filter that accepts the specified severity and rejects any other severity by default', () => {
    given: 'a severity filter';
    const filter = createSeverityFilter(logEventRecord.logEvent.severity);
    expect: 'a severity level ';
    expect(filter(logEventRecord)).toBe(FilterResult.ACCEPT);
    expect(filter(logEventRecord2)).toBe(FilterResult.DENY);
  });

  it('creates a filter that can returns the correct result when matching the specified severity level', () => {
    given: 'expected match and mismatch results'
    const onMatch = FilterResult.NEUTRAL;
    const onMismatch = FilterResult.ACCEPT;
    and: 'a severity filter'
    const filter = createSeverityFilter(logEventRecord.logEvent.severity, {
      onMatch,
      onMismatch
    });
    expect(filter(logEventRecord)).toBe(onMatch);
    expect(filter(logEventRecord2)).toBe(onMismatch);
  });
});
