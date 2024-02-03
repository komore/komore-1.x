import { feature } from '@komore/testing';

import { laterThan } from './later-than';

feature('Must be later than constraint validator', () => {
  it('does not throw an error when an emitted date is after the specified date', () => {
    // TODO
    const referenceTemporal = Temporal.PlainDate.from('2020-01-01');
    laterThan(referenceTemporal);
  });

  it('throws an error');
});
