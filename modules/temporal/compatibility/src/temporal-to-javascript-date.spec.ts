import { Temporal } from '@js-temporal/polyfill';
import { temporalToJavaScriptDate } from './temporal-to-javascript-date';

describe('Temporal to JavaScript Date', () => {
  it.each([
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', new Date('2020-01-01T12:34:56.789+0100')],
    [
      'zoned date time',
      Temporal.ZonedDateTime,
      '2020-01-01T12:34:56.789[Asia/Tokyo]',
      new Date('2020-01-01T04:34:56.789+0100'),
    ],
  ])('can create a JavaScript Date object from a temporal', (_, temporalClass, value, expectedDate) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting a JavaScript Date object from the temporal';
    const result = temporalToJavaScriptDate(temporal);

    expect: 'the correct date to have been returned';
    expect(result).toStrictEqual(expectedDate);
  });
});
