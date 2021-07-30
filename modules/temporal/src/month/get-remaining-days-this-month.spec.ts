import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { Temporal } from 'proposal-temporal';
import { getRemainingDaysThisMonth } from './get-remaining-days-this-month';

describe('Get remaining days this month', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-15');
  let restoreCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    restoreCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => {
    restoreCurrentPlainDate();
  });

  it('can compute the number of remaining days for the current month', () => {
    when: 'getting the number of remaining days for the current month';
    const remainingDays = getRemainingDaysThisMonth();
    expect: 'the correct number of days to have been returned';
    expect(remainingDays).toBe(16);
  });
});
