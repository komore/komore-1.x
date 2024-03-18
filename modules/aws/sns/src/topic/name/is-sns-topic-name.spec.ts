import { feature } from '@komore/testing';

import { isSnsTopicName } from './is-sns-topic-name';

feature('Is SNS topic name', {
  'todo: test'() {
    isSnsTopicName;
    // 1 to 256 characters
    // letters, numbers, -, _
  },
});
