import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { getElapsedDaysThisMonth } from './get-elapsed-days-this-month';

describe('Get elapsed days this month', () => {
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
    const remainingDays = getElapsedDaysThisMonth();

    expect: 'the correct number of days to have been returned';
    expect(remainingDays).toBe(14);
  });
});
