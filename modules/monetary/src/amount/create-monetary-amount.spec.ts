import { feature } from '@komore/testing';

import { createMonetaryAmount } from './create-monetary-amount';

feature('Create monetary amount', {
  'it works'() {
    createMonetaryAmount;
  },
});
