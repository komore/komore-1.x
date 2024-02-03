import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { thisMonth } from './this-month';
import { january } from './months';

feature('This month', () => {
  const plainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedPlainDate = mockCurrentPlainDate(plainDate);
  });

  afterAll(() => mockedPlainDate.clearMock());

  it('returns the current month', () => {
    when: 'getting the current month';
    const month = thisMonth();
    expect: 'the current month to have been returned';
    month === january;
  });
});
