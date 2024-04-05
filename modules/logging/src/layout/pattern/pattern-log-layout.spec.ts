import { testDomain } from '@komore/domain/testing';
import { feature } from '@komore/testing';

import { logEventProperties } from '../../event/properties/log-event-properties';
import { createLogEventType } from '../../event/type/create-log-event-type';
import { type LogEventRecord } from '../../record/log-event-record';
import { defaultLogSeverityNames } from '../../severity/default-log-severity-names';
import { patternLogLayout } from './pattern-log-layout';

feature('Pattern log layout', () => {
  const severityNames = defaultLogSeverityNames();
  const timestamp = Temporal.PlainDateTime.from('2021-01-23T01:02:03.123');
  const logSeverity = 42;
  const logName = 'testLog';
  const logGroup = createLogEventType(testDomain, {
    [logName]: logEventProperties<{
      readonly testProperty: string;
    }>(logSeverity),
  });
  const logEvent = logGroup[logName]({ testProperty: 'test-property' });
  const logEventRecord: LogEventRecord = {
    context: {
      testContext: 'test-context',
    },
    event: logEvent,
    message: '',
    timestamp: Temporal.Now.instant(),
  };

  return {
    'can create a layout for a static pattern'() {
      given: 'a static pattern layout';
      const pattern = 'static test';
      const patternLayout = patternLogLayout({ pattern, severityNames });

      when: 'transforming a log event record';
      const result = patternLayout(logEventRecord);

      expect: 'the result to be the static pattern';
      result === pattern;
    },
    'can create a layout for a pattern with a date token'() {
      given: 'a pattern with a date token';
      const pattern = 'test %date test';
      const patternLayout = patternLogLayout({ pattern, severityNames });

      when: 'transforming a log event record';
      const result = patternLayout(logEventRecord);

      expect: 'the result to have the date token replaced with the log event record timestamp in ISO 8601 format';
      result === `test ${timestamp} test`;
    },
    'can create a layout for a pattern with a domain token'() {
      given: 'a pattern with a domain token';
      const pattern = 'test %domain test';
      const patternLayout = patternLogLayout({ pattern, severityNames });

      when: 'transforming a log event record';
      const result = patternLayout(logEventRecord);

      expect: 'the result to have the domain token replaced with the log event domain name';
      result === `test ${testDomain.name} test`;
    },
    'can create a layout for a pattern with a name token'() {
      given: 'a pattern with a name token';
      const pattern = 'test %name test';
      const patternLayout = patternLogLayout({ pattern, severityNames });

      when: 'transforming a log event record';
      const result = patternLayout(logEventRecord);

      expect: 'the result to have the name token replaced with the log event name';
      result === `test ${logName} test`;
    },
    'can create a layout for a pattern with a severity token'() {
      given: 'a pattern with a severity token';
      const pattern = 'test %severity test';
      const patternLayout = patternLogLayout({ pattern, severityNames });

      when: 'transforming a log event record';
      const result = patternLayout(logEventRecord);

      expect: 'the result to have the severity token replaced with the log event severity';
      result === `test ${logSeverity} test`;
    },
  };
});
