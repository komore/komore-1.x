import { createLogEvent } from './create-log-event';
import { createLogGroup } from './create-log-group';
import { props } from './props';

describe('Create log event', () => {
  const logGroup = createLogGroup('test-log-group');

  it('can create a log event creator for a log event without properties', () => {
    given: 'a log event description, without properties'
    const id = 1;
    const severity = 0;
    const message = 'test message';
    when: 'creating a log event without properties'
    const logEvent = createLogEvent(logGroup, id, severity, message);
    then: 'the log event without '
    // TODO
  });

  it('can create a log event creator for a log event with properties', () => {
    given: 'a log event description, with properties'
    const id = 2;
    const severity = 0;
    const message = 'test message';
    const properties = props<{ test: string }>();
    when: 'creating a log event with properties'
    const logEvent = createLogEvent(logGroup, id, severity, message, properties);
    then: 'the log event creator can create a log event'
    logEvent()
  });
});
