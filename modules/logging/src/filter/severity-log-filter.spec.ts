import { testDomain } from '@komore/domain/testing';
import { feature } from '@komore/testing';

import { type LogEventRecord } from '../record/log-event-record';
import { type LogEvent } from '../event/log-event';
import { logEventProperties } from '../event/properties/log-event-properties';
import { createLogEventType } from '../event/type/create-log-event-type';
import { severityLogFilter } from './severity-log-filter';

feature('Severity log filter', () => {
  const logType = createLogEventType(testDomain, {
    test: logEventProperties(42),
    testMismatch: logEventProperties(41),
  });

  function toRecord(event: LogEvent): LogEventRecord {
    return {
      context: {},
      event,
      message: '',
      timestamp: Temporal.Now.instant(),
    };
  }

  const logEventRecord = toRecord(logType.test());
  const logEventRecordMismatch = toRecord(logType.testMismatch());

  return {
    'creates a filter that accepts the specified severity and rejects any other severity by default'() {
      given: 'a severity filter';
      const filter = severityLogFilter({ severity: logEventRecord.event.severity });

      expect: 'a severity matching the specified severity to be accepted';
      filter(logEventRecord) === 'accept';

      and: 'a severity that does not match the specified severity to be rejected';
      filter(logEventRecordMismatch) === 'reject';
    },
    'creates a filter that can returns the correct result when matching the specified severity level'() {
      given: 'expected match and mismatch results';
      const onMatch = 'neutral';
      const onMismatch = 'accept';
      and: 'a severity filter';
      const filter = severityLogFilter({
        onMatch,
        onMismatch,
        severity: logEventRecord.event.severity,
      });

      expect: 'the filter to return the defined result on match and mismatch';
      filter(logEventRecord) === onMatch;
      filter(logEventRecordMismatch) === onMismatch;
    },
  };
});
