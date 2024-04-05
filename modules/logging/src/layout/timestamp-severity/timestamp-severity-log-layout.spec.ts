import { feature } from '@komore/testing';

import { defaultLogSeverityNames } from '../../severity/default-log-severity-names';
import { timestampSeverityLogLayout } from './timestamp-severity-log-layout';

feature('Timestamp severity log layout', () => {
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
    'can transform a log event record to a specific timestamp severity layout'() {
      given: 'a timestamp severity layout';
      const layout = timestampSeverityLogLayout({ severityNames: defaultLogSeverityNames() });

      when: 'transforming the log event record';
      const result = layout(logEventRecord);

      expect: 'the transformed log event record to have the right layout with a timestamp and a severity';
      result === '2020-01-01T12:34:56.789 DEBUG test-message';
    },
    'can transform a log event record with custom severity names'() {
      given: 'a timestamp severity layout';
      const layout = timestampSeverityLogLayout({
        severityNames: new Map([[100, 'CustomSeverity']]),
      });

      when: 'transforming the log event record';
      const result = layout(logEventRecord);

      expect: 'the transformed log event record to have a custom severity';
      result === '2020-01-01T12:34:56.789 CustomSeverity test-message';
    },
    'uses the severity level numerical value when there is no matching severity name'() {
      given: 'a timestamp severity layout with severity names that cannot match the log event record';
      const layout = timestampSeverityLogLayout({ severityNames: new Map() });

      when: 'transforming the log event record';
      const result = layout(logEventRecord);

      expect: 'the transformed log event record to a numerical severity';
      result === '2020-01-01T12:34:56.789 100 test-message';
    },
  };
});
