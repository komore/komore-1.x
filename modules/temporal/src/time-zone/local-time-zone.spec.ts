import { testTimeZoneId, withMockedTemporals } from '@komore/temporal/testing';
import { feature } from '@komore/testing';

import { localTimeZone } from './local-time-zone';

feature(
  'Local time zone',
  withMockedTemporals(
    {
      currentTimeZoneId: testTimeZoneId,
    },
    {
      'returns the local time zone'() {
        when: 'getting the local time zone';
        const timeZone = localTimeZone();

        expect: 'the correct time zone to have been returned';
        timeZone.id === testTimeZoneId;
      },
    }
  )
);
