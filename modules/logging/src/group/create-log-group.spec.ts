import { expectTypeOf } from '@komore/testing';

import { createLogGroup } from './create-log-group';

describe('Create log group', () => {
  it('creates a group with the correct name', () => {
    given: 'a log group name';
    const logGroupName = 'test-group' as const;

    when: 'creating a log group';
    const logGroup = createLogGroup(logGroupName);

    expect: 'the correct name to be set';
    expect(logGroup.name).toBe(logGroupName);
    expectTypeOf(logGroup.name).toEqualTypeOf<'test-group'>();
  });

  it('throws an error when attempting to override the name', () => {
    given: 'a log group';
    const logGroup = createLogGroup('test-group');

    expect: 'an error to be thrown when attempting to overide the group name';
    expect(() => {
      const overridableLogGroup = logGroup as { name: string };
      overridableLogGroup.name = 'override';
    }).toThrowError();
  });
});
