import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { getElapsedDaysThisWeek } from './get-elapsed-days-this-week';

describe('Get elapsed days this week', () => {
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
    const remainingDays = getElapsedDaysThisWeek();

    expect: 'the correct number of days to have been returned';
    expect(remainingDays).toBe(2);
  });
});
