import { feature } from '@komore/testing';

import { friday } from './friday';
import { monday } from './monday';
import { saturday } from './saturday';
import { sunday } from './sunday';
import { thursday } from './thursday';
import { tuesday } from './tuesday';
import { wednesday } from './wednesday';
import { weekDays } from './week-days';

feature('Week days', {
  'includes all week days in order'() {
    expect: 'week days to include all days';
    weekDays === [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
  },
});
