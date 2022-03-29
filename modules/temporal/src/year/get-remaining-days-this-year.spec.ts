import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { getRemainingDaysThisYear } from './get-remaining-days-this-year';

describe('Get remaining days this year', () => {
  it.each([
    ['2020-01-01', 365],
    ['2020-12-25', 6],
    ['2020-12-31', 0],
  ])('returns the number of fully completed days left until the end of the year', (value, expectedDays) => {
    given: 'the current date';
    const currentPlainDate = Temporal.PlainDate.from(value);
    const mockedPlainDate = mockCurrentPlainDate(currentPlainDate);

    when: 'getting the elapsed days this year';
    const elapsedDays = getRemainingDaysThisYear();

    expect: 'the number of fully completed days left until the end of the year to have been returned';
    expect(elapsedDays).toBe(expectedDays);

    cleanup: mockedPlainDate.clearMock();
  });
});
