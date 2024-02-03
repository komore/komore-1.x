import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { nextYear } from './next-year';

feature('Next year', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => mockedCurrentPlainDate.clearMock());

  it('returns the next year', () => {
    when: 'getting the next year';
    const year = nextYear();

    expect: 'the correct year to have been returned';
    year === 2021;
  });
});
