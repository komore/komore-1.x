import { feature } from '@komore/testing';

import { isSqsEvent } from './is-sqs-event';

feature('Is SQS event', {
  'returns true when an event is an SQS event'() {
    isSqsEvent;
  },
});
