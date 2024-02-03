import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { february } from './months';
import { nextMonth } from './next-month';

feature('Get next month', () => {
  const plainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedPlainDate = mockCurrentPlainDate(plainDate);
  });

  afterAll(() => mockedPlainDate.clearMock());

  it('returns the next month', () => {
    when: 'getting the next month';
    const month = nextMonth();

    expect: 'the next month to have been returned';
    month === february;
  });
});
