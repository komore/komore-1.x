import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { lastMonth } from './last-month';
import { Month } from './month';

feature('Last month', () => {
  const plainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedPlainDate = mockCurrentPlainDate(plainDate);
  });

  afterAll(() => mockedPlainDate.clearMock());

  it('returns the last month', () => {
    when: 'getting the last month';
    const nextMonth = lastMonth();

    expect: 'the last month to have been returned';
    nextMonth === Month.DECEMBER;
  });
});
