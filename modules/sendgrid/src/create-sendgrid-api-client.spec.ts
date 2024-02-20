import { feature } from '@komore/testing';

import { createSendGridApiClient } from './create-sendgrid-api-client';

feature('Create SendGrid API client', {
  todo() {
    createSendGridApiClient;
  },
});
