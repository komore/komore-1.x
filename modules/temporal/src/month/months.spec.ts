import { feature } from '@komore/testing';

import {
  april,
  august,
  december,
  february,
  january,
  july,
  june,
  march,
  may,
  months,
  november,
  october,
  september,
} from './months';

feature('Months', () => {
  it('includes all months in order', () => {
    expect(months).toStrictEqual([
      january,
      february,
      march,
      april,
      may,
      june,
      july,
      august,
      september,
      october,
      november,
      december,
    ]);
  });
});
