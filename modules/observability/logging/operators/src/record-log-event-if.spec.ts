import { createLogEvent, createLogGroup, props, setLoggingDriver } from '@komore/observability/logging';
import { lastValueFrom, of } from 'rxjs';
import { recordLogEventIf } from './record-log-event-if';

describe('Record log event if operator', () => {
  type TestProps = { test: number };
  const logGroup = createLogGroup('test-group');
  const logEvent = createLogEvent(logGroup, 1, 42, 'test-message');
  const logEventWithProperties = createLogEvent(logGroup, 2, 42, 'test-message-with-properties', props<TestProps>());

  it.skip('can get passed a log event', async () => {
    given: 'an observable'
    const obs$ = of(42);
    when: 'using the operator in a pipe'
    const obsWithLog$ = obs$.pipe(
      recordLogEventIf(value => value === 42, logEvent)
    );
    expect: 'the log event to have been recorded'
    await lastValueFrom(obsWithLog$);

  });

  it('can get passed a function that creates a log event', () => {
    given: 'a function that creates a log event'
  });

  it('can get passed a log event creator', async () => {

  });

  it('does not record an event when the predicate condition is not met', () => {

  });

  it('can assert the emitted value type via the predicate condition', () => {
      
  });
});
