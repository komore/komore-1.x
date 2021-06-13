import type {
  CognitoEvent,
  CognitoEventCreateAuthChallengeRequest,
  CognitoEventCreateAuthChallengeResponse
} from '@komore/function-lambda';
import { createTestCognitoEvent } from './create-test-cognito-event';

export function createTestCognitoCreateAuthChallengeEvent(): CognitoEvent<'CreateAuthChallenge_Authentication'> {
  const request: CognitoEventCreateAuthChallengeRequest = {};
  const response: CognitoEventCreateAuthChallengeResponse = {};
  return createTestCognitoEvent('CreateAuthChallenge_Authentication', request, response);
}
