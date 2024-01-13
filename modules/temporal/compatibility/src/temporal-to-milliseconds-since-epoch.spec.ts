import { Temporal } from '@komore/temporal';
import { mockCurrentTimeZone } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { temporalToMillisecondsSinceEpoch } from './temporal-to-milliseconds-since-epoch';

feature('Temporal to milliseconds since Epoch', () => {
  const currentTimeZone = Temporal.TimeZone.from('Europe/Paris') as Temporal.TimeZone; // TODO: why!?
  let mockedTimeZone: ReturnType<typeof mockCurrentTimeZone>;

  beforeAll(() => {
    mockedTimeZone = mockCurrentTimeZone(currentTimeZone);
  });

  afterAll(() => mockedTimeZone.clearMock());

  it.each([
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789012345', 1577878496789],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789012345[Europe/Paris]', 1577878496789],
  ])('can return the number of milliseconds since Epoch from a %s', (_, temporalClass, value, expectedMilliseconds) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the number of milliseconds since Epoch';
    const milliseconds = temporalToMillisecondsSinceEpoch(temporal);

    expect: 'the number of milliseconds since Epoch to have been returned';
    expect(milliseconds).toBe(expectedMilliseconds);
  });
});
