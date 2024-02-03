import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { elapsedDaysThisMonth } from './elapsed-days-this-month';

feature('Elapsed days this month', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-15');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => {
    mockedCurrentPlainDate.clearMock();
  });

  it('can compute the number of elapsed days for the current month', () => {
    when: 'getting the number of elapsed days for the current month';
    const elapsedDays = elapsedDaysThisMonth();

    expect: 'the correct number of days to have been returned';
    expect(elapsedDays).toBe(14);
  });
});
