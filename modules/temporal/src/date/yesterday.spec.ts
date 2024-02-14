import { withMockedTemporals } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { yesterday } from './yesterday';

feature(
  'Yesterday',
  withMockedTemporals(
    {
      currentPlainDate: Temporal.PlainDate.from('2020-01-01'),
    },
    {
      'returns yesterday as a plain date'() {
        when: 'getting yesterday';
        const result = yesterday();

        expect: 'a plain date to have been returned';
        result instanceof Temporal.PlainDate;
        and: 'the plain date to occur yesterday';
        const { year, month, day } = result;
        year === 2019;
        month === 12;
        day === 31;
      },
    }
  )
);
