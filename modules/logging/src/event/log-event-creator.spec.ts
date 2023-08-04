import { expectTypeOf } from '@komore/testing';

import { type LogGroup } from '../group/log-group';
import { type LogEvent } from './log-event';
import { type LogEventCreator } from './log-event-creator';

describe('Log event creator', () => {
  it('can be defined without properties', () => {
    given: 'a log group type, event identifier and event message';
    type LogGroupType = LogGroup<'test-group'>;
    type LogEventId = 42;
    type LogEventMessage = 'test-message';

    when: 'defining a log event creator for those generic parameters';
    type TestType = LogEventCreator<LogGroupType, LogEventId, LogEventMessage>;

    expect: 'the event creator type to feature the full log event type identifier';
    expectTypeOf<TestType['type']>().toEqualTypeOf<'test-group.42'>();
    and: 'the function to take no parameters and return a matching log event';
    expectTypeOf<Parameters<TestType>>().toEqualTypeOf<[error?: unknown]>();
    expectTypeOf<ReturnType<TestType>>().toEqualTypeOf<LogEvent<LogGroupType, LogEventId, LogEventMessage>>();
  });

  it('can be defined with properties', () => {
    given: 'a log group type, event identifier, event message and event properties schema';
    type LogGroupType = LogGroup<'test-group'>;
    type LogEventId = 42;
    type LogEventMessage = 'test-message';
    type LogPropertiesSchema = { test: number };

    when: 'defining a log event creator for those generic parameters';
    type TestType = LogEventCreator<LogGroupType, LogEventId, LogEventMessage, LogPropertiesSchema>;

    expect: 'the event creator type to feature the full log event type identifier';
    expectTypeOf<TestType['type']>().toEqualTypeOf<'test-group.42'>();
    and: 'the function to take a properties schema as its input and return a matching log event';
    expectTypeOf<Parameters<TestType>>().toEqualTypeOf<[properties: LogPropertiesSchema, error?: unknown]>();
    expectTypeOf<ReturnType<TestType>>().toEqualTypeOf<
      LogEvent<LogGroupType, LogEventId, LogEventMessage, LogPropertiesSchema>
    >();
  });
});
