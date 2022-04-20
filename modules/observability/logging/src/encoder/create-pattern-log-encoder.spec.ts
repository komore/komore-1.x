import { Temporal } from '@js-temporal/polyfill';
import { createLogEvent } from '../definition/create-log-event';
import { createLogGroup } from '../definition/create-log-group';
import { type UntypedLogEventRecord } from '../definition/log-event-record';
import { logEventProps } from '../definition/log-event-props';
import { createPatternLogEncoder } from './create-pattern-log-encoder';

describe('Create pattern log encoder', () => {
  const timestamp = Temporal.PlainDateTime.from('2021-01-23T01:02:03.123');
  const logGroupName = 'test-group';
  const logGroup = createLogGroup(logGroupName);
  const logId = 1;
  const logSeverity = 42;
  const logEventCreator = createLogEvent(
    logGroup,
    logId,
    logSeverity,
    'test-message',
    logEventProps<{ testProperty: string }>()
  );
  const logEvent = logEventCreator({ testProperty: 'test-property' });
  const logEventRecord: UntypedLogEventRecord = {
    logContext: {
      testContext: 'test-context',
    },
    logEvent,
    message: logEvent.message,
    timestamp,
  };

  it('can create a encoder for a static pattern', () => {
    given: 'a static pattern encoder';
    const pattern = 'static test';
    const patternEncoder = createPatternLogEncoder(pattern);

    when: 'transforming a log event record';
    const result = patternEncoder(logEventRecord);

    expect: 'the result to be the static pattern';
    expect(result).toBe(pattern);
  });

  it('can create a encoder for a pattern with a date token', () => {
    given: 'a pattern with a date token';
    const pattern = 'test %date test';
    const patternEncoder = createPatternLogEncoder(pattern);

    when: 'transforming a log event record';
    const result = patternEncoder(logEventRecord);

    expect: 'the result to have the date token replaced with the log event record timestamp in ISO 8601 format';
    expect(result).toBe(`test ${timestamp} test`);
  });

  it('can create a encoder for a pattern with a group token', () => {
    given: 'a pattern with a group token';
    const pattern = 'test %group test';
    const patternEncoder = createPatternLogEncoder(pattern);

    when: 'transforming a log event record';
    const result = patternEncoder(logEventRecord);

    expect: 'the result to have the group token replaced with the log event group name';
    expect(result).toBe(`test ${logGroupName} test`);
  });

  it('can create a encoder for a pattern with an identifier token', () => {
    given: 'a pattern with an identifier token';
    const pattern = 'test %id test';
    const patternEncoder = createPatternLogEncoder(pattern);

    when: 'transforming a log event record';
    const result = patternEncoder(logEventRecord);

    expect: 'the result to have the identifier token replaced with the log event identifier';
    expect(result).toBe(`test ${logId} test`);
  });

  it('can create a encoder for a pattern with an severity token', () => {
    given: 'a pattern with a severity token';
    const pattern = 'test %severity test';
    const patternEncoder = createPatternLogEncoder(pattern);

    when: 'transforming a log event record';
    const result = patternEncoder(logEventRecord);

    expect: 'the result to have the severity token replaced with the log event severity';
    expect(result).toBe(`test ${logSeverity} test`);
  });

  it('can create a encoder for a pattern with an severity token', () => {
    given: 'a pattern with a severity token';
    const pattern = 'test %severity test';
    const patternEncoder = createPatternLogEncoder(pattern);

    when: 'transforming a log event record';
    const result = patternEncoder(logEventRecord);

    expect: 'the result to have the severity token replaced with the log event severity';
    expect(result).toBe(`test ${logSeverity} test`);
  });
});
