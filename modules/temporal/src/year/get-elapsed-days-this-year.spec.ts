import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { getElapsedDaysThisYear } from './get-elapsed-days-this-year';

describe('Get elapsed days this year', () => {
  it.each([
    ['2020-01-01', 0],
    ['2020-01-15', 14],
    ['2020-12-31', 365],
  ])('returns the number of fully completed days since the start of the year', (value, expectedDays) => {
    given: 'the current date';
    const currentPlainDate = Temporal.PlainDate.from(value);
    const mockedPlainDate = mockCurrentPlainDate(currentPlainDate);

    when: 'getting the elapsed days this year';
    const elapsedDays = getElapsedDaysThisYear();

    expect: 'the number of fully completed days since the start of the year to have been returned';
    expect(elapsedDays).toBe(expectedDays);

    cleanup: mockedPlainDate.clearMock();
  });
});
