import {
  type CognitoEvent,
  type CognitoEventCreateAuthChallengeRequest,
  type CognitoEventCreateAuthChallengeResponse
} from '@komore/function-lambda/cognito';
import { createTestCognitoEvent } from './create-test-cognito-event';

export function createTestCognitoCreateAuthChallengeEvent(): CognitoEvent<'CreateAuthChallenge_Authentication'> {
  const request: CognitoEventCreateAuthChallengeRequest = {};
  const response: CognitoEventCreateAuthChallengeResponse = {};
  return createTestCognitoEvent('CreateAuthChallenge_Authentication', request, response);
}
