import { type CognitoCreateAuthChallengeEvent } from './create-auth-challenge/cognito-create-auth-challenge-event';
import { type CognitoPreSignUpEvent } from './pre-sign-up/cognito-pre-sign-up-event';

/**
 * Cognito event
 */
export type CognitoEvent = CognitoCreateAuthChallengeEvent | CognitoPreSignUpEvent;
