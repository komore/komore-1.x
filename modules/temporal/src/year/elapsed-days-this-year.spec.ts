import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { elapsedDaysThisYear } from './elapsed-days-this-year';

feature('Elapsed days this year', () => {
  it.each([
    ['2020-01-01', 0],
    ['2020-01-15', 14],
    ['2020-12-31', 365],
  ])('returns the number of fully completed days since the start of the year', (value, expectedDays) => {
    given: 'the current date';
    const currentPlainDate = Temporal.PlainDate.from(value);
    const mockedPlainDate = mockCurrentPlainDate(currentPlainDate);

    when: 'getting the elapsed days this year';
    const elapsedDays = elapsedDaysThisYear();

    expect: 'the number of fully completed days since the start of the year to have been returned';
    elapsedDays === expectedDays;

    cleanup: mockedPlainDate.clearMock();
  });
});
