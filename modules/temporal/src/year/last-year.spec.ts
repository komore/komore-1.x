import { mockCurrentPlainDate } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { lastYear } from './last-year';

feature('Last year', () => {
  const currentPlainDate = Temporal.PlainDate.from('2020-01-01');
  const mockedCurrentPlainDate = mockCurrentPlainDate(currentPlainDate);

  cleanup: mockedCurrentPlainDate.clearMock();

  return {
    'returns the last year'() {
      when: 'getting the last year';
      const year = lastYear();

      expect: 'the correct year to have been returned';
      year === 2019;
    },
  };
});
