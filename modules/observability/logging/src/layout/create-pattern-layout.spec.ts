import { createLogEvent } from '../create-log-event';
import { createLogGroup } from '../create-log-group';
import type { UntypedLogEventRecord } from '../log-event-record';
import { props } from '../definition/props';
import { createPatternLayout } from './create-pattern-layout';

describe('Create pattern layout', () => {
  const timestamp = new Date('2021-01-23T01:02:03.123Z');
  const logGroupName = 'test-group';
  const logGroup = createLogGroup(logGroupName);
  const logId = 1;
  const logSeverity = 42;
  const logEventCreator = createLogEvent(logGroup, logId, logSeverity, 'test-message', props<{ testProperty: string }>());
  const logEvent = logEventCreator({ testProperty: 'test-property' });
  const logEventRecord: UntypedLogEventRecord = {
    logContext: {
      testContext: 'test-context'
    },
    logEvent,
    message: logEvent.message,
    timestamp
  };

  it('can create a layout for a static pattern', () => {
    given: 'a static pattern layout';
    const pattern = 'static test';
    const patternLayout = createPatternLayout(pattern);
    when: 'transforming a log event record';
    const result = patternLayout(logEventRecord);
    expect: 'the result to be the static pattern';
    expect(result).toBe(pattern);
  });

  it('can create a layout for a pattern with a date token', () => {
    given: 'a pattern with a date token';
    const pattern = 'test %date test';
    const patternLayout = createPatternLayout(pattern);
    when: 'transforming a log event record';
    const result = patternLayout(logEventRecord);
    expect: 'the result to have the date token replaced with the log event record timestamp in ISO 8601 format';
    expect(result).toBe(`test ${timestamp.toISOString()} test`);
  });

  it('can create a layout for a pattern with a group token', () => {
    given: 'a pattern with a group token';
    const pattern = 'test %group test';
    const patternLayout = createPatternLayout(pattern);
    when: 'transforming a log event record';
    const result = patternLayout(logEventRecord);
    expect: 'the result to have the group token replaced with the log event group name';
    expect(result).toBe(`test ${logGroupName} test`);
  });

  it('can create a layout for a pattern with an identifier token', () => {
    given: 'a pattern with an identifier token';
    const pattern = 'test %id test';
    const patternLayout = createPatternLayout(pattern);
    when: 'transforming a log event record';
    const result = patternLayout(logEventRecord);
    expect: 'the result to have the identifier token replaced with the log event identifier';
    expect(result).toBe(`test ${logId} test`);
  });

  it('can create a layout for a pattern with an severity token', () => {
    given: 'a pattern with a severity token';
    const pattern = 'test %severity test';
    const patternLayout = createPatternLayout(pattern);
    when: 'transforming a log event record';
    const result = patternLayout(logEventRecord);
    expect: 'the result to have the severity token replaced with the log event severity';
    expect(result).toBe(`test ${logSeverity} test`);
  });

  it('can create a layout for a pattern with an severity token', () => {
    given: 'a pattern with a severity token';
    const pattern = 'test %severity test';
    const patternLayout = createPatternLayout(pattern);
    when: 'transforming a log event record';
    const result = patternLayout(logEventRecord);
    expect: 'the result to have the severity token replaced with the log event severity';
    expect(result).toBe(`test ${logSeverity} test`);
  });
});
