import { expectTypeOf } from 'expect-type';
import type { LogGroup } from './log-group';
import type { LogGroupName } from './log-group-name';

describe('Log group name', () => {
  it('can infer a log group name', () =>{
    given: 'a log group type'
    type TestLogGroup = LogGroup<'test'>;
    when: 'getting the log group name'
    type TestLogGroupName = LogGroupName<TestLogGroup>;
    expect: 'the log group name to have been correctly inferred'
    expectTypeOf<TestLogGroupName>().toEqualTypeOf<'test'>();
  });
});
