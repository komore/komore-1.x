import { expectTypeOf } from '@komore/testing';

import { createLogGroup } from '../group/create-log-group';
import { createLogEvent } from './create-log-event';
import { type LogEvent } from './log-event';
import { type LogEventCreator } from './log-event-creator';
import { logEventProps } from './log-event-props';

describe('Create log event', () => {
  const logGroup = createLogGroup('test-log-group');

  it('can create a log event creator for a log event without properties', () => {
    given: 'a log event description, without properties';
    const id = 1;
    const severity = 42;
    const message = 'test message';
    when: 'creating a log event creator without properties and a log event from it';
    const logEventCreator = createLogEvent(logGroup, id, severity, message);
    const logEvent = logEventCreator();
    expect: 'the log event creator to have a correct signature';
    expectTypeOf(logEventCreator).toEqualTypeOf<LogEventCreator<typeof logGroup, typeof id, typeof message>>();
    and: 'a correct type property';
    expect(logEventCreator.type).toBe('test-log-group.1');
    and: 'the log event it creates to contain the passed specification';
    expect(logEvent.group).toBe(logGroup);
    expect(logEvent.id).toBe(id);
    expect(logEvent.message).toBe(message);
    expect(logEvent.properties).toBeUndefined();
    expect(logEvent.severity).toBe(severity);
  });

  it('can create a log event creator for a log event with properties', () => {
    given: 'a log event description, with properties';
    const id = 2;
    const severity = 42;
    const message = 'test-message';
    const properties = { test: 'test-property-value' };
    const propertiesSchema = logEventProps<typeof properties>();
    when: 'creating a log event creator with properties and a log event from it';
    const logEventCreator = createLogEvent(logGroup, id, severity, message, propertiesSchema);
    const logEvent = logEventCreator(properties);
    expect: 'the log event creator to have a correct signature';
    expectTypeOf(logEventCreator).toEqualTypeOf<
      LogEventCreator<typeof logGroup, typeof id, typeof message, typeof properties>
    >();
    and: 'a correct type property';
    expect(logEventCreator.type).toBe('test-log-group.2');
    and: 'the log event to have a correct signature';
    expectTypeOf(logEvent).toEqualTypeOf<LogEvent<typeof logGroup, typeof id, typeof message, typeof properties>>();
    and: 'the log event it creates to contain the passed specification and properties';
    expect(logEvent.group).toBe(logGroup);
    expect(logEvent.id).toBe(id);
    expect(logEvent.message).toBe(message);
    expect(logEvent.properties).toBe(properties);
    expect(logEvent.severity).toBe(severity);
  });
});
