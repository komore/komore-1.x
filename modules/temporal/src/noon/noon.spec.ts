import { feature } from '@komore/testing';

import { noon } from './noon';

feature('Get noon', {
  'returns the time at noon'() {
    when: 'getting the time at noon';
    const plainTime = noon();

    expect: 'the correct time to have been returned';
    plainTime.hour === 12;
    plainTime.minute === 0;
    plainTime.second === 0;
    plainTime.millisecond === 0;
    plainTime.millisecond === 0;
    plainTime.nanosecond === 0;
  },
});
