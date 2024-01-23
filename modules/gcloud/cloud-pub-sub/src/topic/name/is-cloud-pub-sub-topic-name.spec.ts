import { feature } from '@komore/testing';

import { isCloudPubSubTopicName } from './is-cloud-pub-sub-topic-name';

feature('Is Cloud Pub/Sub topic name', {
  'returns true when a string is a valid topic name'(topicName: string, expectedResult: boolean) {
    when: 'testing whether a string is a valid Cloud Pub/Sub topic name';
    const result = isCloudPubSubTopicName(topicName);

    expect: 'true to be returned if the string is a valid topic name';
    result === expectedResult;

    where: [
      ['test', false],
      ['test5', true],
    ];
  },
});
