import { Temporal } from '@js-temporal/polyfill';
import { toJavaScriptDate } from './to-javascript-date';

describe('To JavaScript Date', () => {
  it.each([
    [
      'plain date time',
      Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'),
      new Date('2020-01-01T12:34:56.789+0100')
    ],
    [
      'zoned date time',
      Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Asia/Tokyo]'),
      new Date('2020-01-01T04:34:56.789+0100')
    ]
  ])('can create a JavaScript Date object from a temporal', (_, temporal, expectedDate) => {
    given: 'a temporal';
    when: 'getting a JavaScript Date object from the temporal';
    const result = toJavaScriptDate(temporal);
    expect: 'the correct date to have been returned';
    expect(result).toStrictEqual(expectedDate);
  });
});
