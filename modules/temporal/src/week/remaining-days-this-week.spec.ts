import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { remainingDaysThisWeek } from './remaining-days-this-week';

feature('Get remaining days this week', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => {
    mockedCurrentPlainDate.clearMock();
  });

  it('can compute the number of remaining days for the current week', () => {
    when: 'getting the number of remaining days for the current week';
    const remainingDays = remainingDaysThisWeek();

    expect: 'the correct number of days to have been returned';
    remainingDays === 4;
  });
});
