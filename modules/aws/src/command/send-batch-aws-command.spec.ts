import { feature } from '@komore/testing';

import { sendBatchAwsCommand } from './send-batch-aws-command';

feature('Send batch command', {
  'it works'() {
    sendBatchAwsCommand;
  },
});
