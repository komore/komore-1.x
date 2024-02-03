import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { thisYear } from './this-year';

feature('This year', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    // TODO: withMockedXxx to pass directly to feature()
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => mockedCurrentPlainDate.clearMock());

  it('returns the current year', () => {
    when: 'getting the current year';
    const currentYear = thisYear();

    expect: 'the correct year to have been returned';
    currentYear === 2020;
  });
});
