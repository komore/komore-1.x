import { Temporal } from '../temporal';
import { asDateTimeString } from './as-date-time-string';

describe('As date time string', () => {
  const previousTimeZone = Temporal.Now.timeZone;
  const mockTimeZone = Temporal.TimeZone.from('Europe/Paris') as Temporal.TimeZone;

  Temporal.Now.timeZone = () => mockTimeZone;

  afterAll(() => {
    Temporal.Now.timeZone = previousTimeZone;
  });

  it.each([
    { type: 'string', value: '2022-09-01T12:34:56', expectedString: '2022-09-01T12:34:56Z' },
    {
      type: 'ZonedDateTime',
      value: Temporal.ZonedDateTime.from('2022-09-01T12:34:56[Europe/Paris]'),
      expectedString: '2022-09-01T10:34:56Z',
    },
    {
      type: 'PlainDateTime',
      value: Temporal.ZonedDateTime.from('2022-09-01T12:34:56[Europe/Paris]').toPlainDateTime(),
      expectedString: '2022-09-01T10:34:56Z',
    },
    {
      type: 'Instant',
      value: Temporal.Instant.from('2022-09-01T12:34:56Z'),
      expectedString: '2022-09-01T12:34:56Z',
    },
  ])('can build a date time string from a $type', ({ value, expectedString }) => {
    // given: a value

    // when: building a date time string
    const dateTimeString = asDateTimeString(value);

    // then: the correct date time string is returned
    expect(dateTimeString).toBe(expectedString);
  });
});
