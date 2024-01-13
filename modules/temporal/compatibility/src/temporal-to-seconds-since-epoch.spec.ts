import { Temporal } from '@komore/temporal';
import { mockCurrentTimeZone } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { temporalToSecondsSinceEpoch } from './temporal-to-seconds-since-epoch';

feature('Temporal to seconds since Epoch', () => {
  const currentTimeZone = Temporal.TimeZone.from('Europe/Paris') as Temporal.TimeZone; // TODO: why!?
  let mockedTimeZone: ReturnType<typeof mockCurrentTimeZone>;

  beforeAll(() => {
    mockedTimeZone = mockCurrentTimeZone(currentTimeZone);
  });

  afterAll(() => mockedTimeZone.clearMock());

  it.each([
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789012345', 1577878496],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789012345[Europe/Paris]', 1577878496],
  ])('can return the number of seconds since Epoch from a %s', (_, temporalClass, value, expectedSeconds) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the number of seconds since Epoch';
    const seconds = temporalToSecondsSinceEpoch(temporal);

    expect: 'the number of seconds since Epoch to have been returned';
    expect(seconds).toBe(expectedSeconds);
  });
});
