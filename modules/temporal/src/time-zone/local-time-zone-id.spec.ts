import { testTimeZoneId, withMockedTemporals } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { localTimeZoneId } from './local-time-zone-id';

feature(
  'Local time zone identifier',
  withMockedTemporals(
    {
      currentTimeZoneId: testTimeZoneId,
    },
    {
      'returns the local time zone identifier'() {
        when: 'getting the local time zone identifier';
        const timeZoneId = localTimeZoneId();

        expect: 'the correct identifier to have been returned';
        timeZoneId === testTimeZoneId;
      },
    }
  )
);
