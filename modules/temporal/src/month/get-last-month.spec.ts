import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { getLastMonth } from './get-last-month';
import { Month } from './month';

describe('Get last month', () => {
  const plainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedPlainDate = mockCurrentPlainDate(plainDate);
  });

  afterAll(() => mockedPlainDate.clearMock());

  it('returns the last month', () => {
    when: 'getting the last month';
    const nextMonth = getLastMonth();

    expect: 'the last month to have been returned';
    expect(nextMonth).toBe(Month.DECEMBER);
  });
});
