import { feature } from '@komore/testing';

import { midnight } from './midnight';

feature('Midnight', {
  'returns the time at midnight'() {
    when: 'getting the time at midnight';
    const plainTime = midnight();

    expect: 'the correct time to have been returned';
    plainTime.hour === 0;
    plainTime.minute === 0;
    plainTime.second === 0;
    plainTime.millisecond === 0;
    plainTime.millisecond === 0;
    plainTime.nanosecond === 0;
  },
});
