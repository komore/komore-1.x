import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { getThisMonth } from './get-this-month';
import { Month } from './month';

describe('Get this month', () => {
  const plainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedPlainDate = mockCurrentPlainDate(plainDate);
  });

  afterAll(() => mockedPlainDate.clearMock());

  it('returns the current month', () => {
    when: 'getting the current month';
    const thisMonth = getThisMonth();
    expect: 'the current month to have been returned';
    expect(thisMonth).toBe(Month.JANUARY);
  });
});
