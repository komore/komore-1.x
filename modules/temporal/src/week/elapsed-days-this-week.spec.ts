import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { elapsedDaysThisWeek } from './elapsed-days-this-week';

feature('Elapsed days this week', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => {
    mockedCurrentPlainDate.clearMock();
  });

  it('can compute the number of elapsed days for the current week', () => {
    when: 'getting the number of elapsed days for the current week';
    const elapsedDays = elapsedDaysThisWeek();

    expect: 'the correct number of days to have been returned';
    elapsedDays === 2;
  });
});
