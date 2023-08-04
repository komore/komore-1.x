import { Temporal } from '@komore/temporal';
import { expectEqual, feature } from '@komore/testing';

import { createLogEvent } from '../event/create-log-event';
import { type UntypedLogEventRecord } from '../event-record/log-event-record';
import { createLogGroup } from '../group/create-log-group';
import { createTimestampSeverityEncoder } from './create-timestamp-severity-encoder';

feature('Create timestamp severity encoder', () => {
  const logGroup = createLogGroup('test-group');
  const logEventCreator = createLogEvent(logGroup, 1, 100, 'test-message');
  const logEvent = logEventCreator({ testProperty: 'test-property' });
  const logEventRecord: UntypedLogEventRecord = {
    logContext: {
      testContext: 'test-context',
    },
    logEvent,
    message: logEvent.message,
    timestamp: Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'),
  };

  return {
    'can transform a log event record to a specific timestamp severity encoder': () => {
      given: 'a timestamp severity encoder';
      const encoder = createTimestampSeverityEncoder();

      when: 'transforming the log event record';
      const result = encoder(logEventRecord);

      expect: 'the transformed log event record to have the right encoder with a timestamp and a severity';
      result === '2020-01-01T12:34:56.789 DEBUG test-message';
      expectEqual(result)('2020-01-01T12:34:56.789 DEBUG test-message');
    },
    'can transform a log event record with custom severity names': {
      given: 'a timestamp severity encoder';
      const encoder = createTimestampSeverityEncoder({
        severityNames: new Map([[100, 'CustomSeverity']]),
      });

      when: 'transforming the log event record';
      const result = encoder(logEventRecord);

      expect: 'the transformed log event record to have a custom severity';
      result === '2020-01-01T12:34:56.789 CustomSeverity test-message';
      expectEqual(result)('2020-01-01T12:34:56.789 CustomSeverity test-message');
    },
    'uses the severity level numerical value when there is no matching severity name': () => {
      given: 'a timestamp severity encoder with severity names that cannot match the log event record';
      const encoder = createTimestampSeverityEncoder({        severityNames: new Map()      });

      when: 'transforming the log event record';
      const result = encoder(logEventRecord);

      expect: 'the transformed log event record to a numerical severity';
      expect(result).toBe('2020-01-01T12:34:56.789 100 test-message');
    }
  };
});
