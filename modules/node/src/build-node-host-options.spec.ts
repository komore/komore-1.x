import { feature } from '@komore/testing';

import { buildNodeHostOptions } from './build-node-host-options';

feature('Build Node host options', {
  'returns an options object with default values'() {
    when: 'building a Node host options';
    const options = buildNodeHostOptions();

    expect: 'the correct default values to have been set';
    options.exitTimeout === 0;
  },
});
