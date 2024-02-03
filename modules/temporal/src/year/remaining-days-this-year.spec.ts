import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { remainingDaysThisYear } from './remaining-days-this-year';

feature('Remaining days this year', {
  'returns the number of fully completed days left until the end of the year'(value, expectedDays) {
    given: 'the current date';
    const currentPlainDate = Temporal.PlainDate.from(value);
    const mockedPlainDate = mockCurrentPlainDate(currentPlainDate);

    when: 'getting the elapsed days this year';
    const remainingDays = remainingDaysThisYear();

    expect: 'the number of fully completed days left until the end of the year to have been returned';
    remainingDays === expectedDays;

    where: 'TODO';
    [
      ['2020-01-01', 365],
      ['2020-12-25', 6],
      ['2020-12-31', 0],
    ] as const;

    cleanup: mockedPlainDate.clearMock();
  },
});
