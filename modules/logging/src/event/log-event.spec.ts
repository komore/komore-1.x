import { expectTypeOf } from '@komore/testing';

import { type LogEvent } from './log-event';
import { type LogGroup } from './log-group';

describe('Log event', () => {
  it('can be defined without properties', () => {
    given: 'a log group type';
    type TestLogGroup = LogGroup<'test-group'>;
    and: 'a log event type without properties';
    type TestLogEvent = LogEvent<TestLogGroup, 1, 'test message'>;

    expect: 'the interface to correctly expose all property types';
    expectTypeOf<TestLogEvent['group']>().toEqualTypeOf<TestLogGroup>();
  });
});
