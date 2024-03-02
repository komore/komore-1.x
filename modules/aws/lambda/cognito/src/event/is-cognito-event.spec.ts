import { feature } from '@komore/testing';

import { type CognitoEvent } from './cognito-event';
import { isCognitoEvent } from './is-cognito-event';

feature('Is Cognito event', {
  'TODO: test'() {
    isCognitoEvent(undefined as unknown as CognitoEvent<'CreateAuthChallenge_Authentication'>);
  },
});
