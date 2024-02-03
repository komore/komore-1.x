import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { remainingDaysThisMonth } from './remaining-days-this-month';

feature('Remaining days this month', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-15');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => {
    mockedCurrentPlainDate.clearMock();
  });

  it('can compute the number of remaining days for the current month', () => {
    when: 'getting the number of remaining days for the current month';
    const remainingDays = remainingDaysThisMonth();

    expect: 'the correct number of days to have been returned';
    expect(remainingDays).toBe(16);
  });
});
