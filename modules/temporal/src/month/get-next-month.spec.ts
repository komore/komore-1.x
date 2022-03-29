import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { getNextMonth } from './get-next-month';
import { Month } from './month';

describe('Get next month', () => {
  const plainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedPlainDate = mockCurrentPlainDate(plainDate);
  });

  afterAll(() => mockedPlainDate.clearMock());

  it('returns the next month', () => {
    when: 'getting the next month';
    const nextMonth = getNextMonth();

    expect: 'the next month to have been returned';
    expect(nextMonth).toBe(Month.FEBRUARY);
  });
});
