import { Temporal } from '@js-temporal/polyfill';
import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { getLastYear } from './get-last-year';

describe('Get last year', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  let mockedCurrentPlainDate: ReturnType<typeof mockCurrentPlainDate>;

  beforeAll(() => {
    mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);
  });

  afterAll(() => mockedCurrentPlainDate.clearMock());

  it('returns the last year', () => {
    when: 'getting the last year';
    const lastYear = getLastYear();

    expect: 'the correct year to have been returned';
    expect(lastYear).toBe(2019);
  });
});
