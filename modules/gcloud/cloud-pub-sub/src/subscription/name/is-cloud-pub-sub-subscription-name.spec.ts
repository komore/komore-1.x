import { feature } from '@komore/testing';

import { isCloudPubSubSubscriptionName } from './is-cloud-pub-sub-subscription-name';

feature('Is Cloud Pub/Sub subscription name', {
  'returns true when a string is a valid subscription name'(subscriptionName: string, expectedResult: boolean) {
    when: 'testing whether a string is a valid Cloud Pub/Sub subscription name';
    const result = isCloudPubSubSubscriptionName(subscriptionName);

    expect: 'true to be returned if the string is a valid subscription name';
    result === expectedResult;

    where: [
      ['test', false],
      ['test5', true],
    ];
  },
});
