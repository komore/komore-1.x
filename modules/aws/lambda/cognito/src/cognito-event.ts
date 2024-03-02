import { createLambdaTrigger, type LambdaTrigger } from '@komore/aws/lambda';

import { type CognitoEvent } from './event/cognito-event';
import { isCognitoEvent } from './event/is-cognito-event';

export function cognitoEvent(options?: unknown): LambdaTrigger<CognitoEvent, void> {
  return createLambdaTrigger({
    processor,
    test: isCognitoEvent,
  });
}
