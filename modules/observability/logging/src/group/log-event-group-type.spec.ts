import { expectTypeOf } from 'expect-type';
import { type LogEvent } from '../event/log-event';
import { type LogEventGroupType } from './log-event-group-type';
import { type LogGroup } from './log-group';

describe('Log event group type', () => {
  it('can infer the group type from a log event', () => {
    given: 'a log event type';
    type TestGroupType = LogGroup<'test-group'>;
    type TestEventType = LogEvent<TestGroupType, 1, 'message'>;

    when: 'getting the log group type';
    type InferredGroupType = LogEventGroupType<TestEventType>;

    expect: 'the log group type to be correctly inferred';
    expectTypeOf<InferredGroupType>().toEqualTypeOf<TestGroupType>();
  });
});
