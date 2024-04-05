import { testDomain } from '@komore/domain/testing';
import { feature } from '@komore/testing';

import { thresholdLogFilter } from './threshold-log-filter';
import { type LogEvent } from '../event/log-event';
import { createLogEventType } from '../event/type/create-log-event-type';
import { logEventProperties } from '../event/properties/log-event-properties';
import { type LogEventRecord } from '../record/log-event-record';

feature('Threshold log filter', () => {
  const logType = createLogEventType(testDomain, {
    test: logEventProperties(42),
    testAbove: logEventProperties(43),
    testBelow: logEventProperties(41),
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
  const logEventRecordAbove = toRecord(logType.testAbove());
  const logEventRecordBelow = toRecord(logType.testBelow());

  return {
    'creates a filter that accepts log event records with a severity at least as high as the specified one'() {
      given: 'a threshold filter';
      const filter = thresholdLogFilter({ minimumSeverity: logEventRecord.event.severity });

      expect: 'a severity matching the specified severity to be ignored';
      filter(logEventRecord) === 'neutral';
      and: 'a severity above the specified severity to be ignored';
      filter(logEventRecordAbove) === 'neutral';
      and: 'a severity below the specified severity to be rejected';
      filter(logEventRecordBelow) === 'reject';
    },
  };
});
