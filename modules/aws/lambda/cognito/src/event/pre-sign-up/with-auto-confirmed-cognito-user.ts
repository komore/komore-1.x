import { cognitoEventResponse } from '../cognito-event-response';
import { type CognitoPreSignUpEvent } from './cognito-pre-sign-up-event';

/**
 * Creates a function that sets the auto-confirm property on a pre-sign-up trigger event
 *
 * @param autoVerifyOptions Auto verification options
 * @returns Function that sets the auto-confirm property on a pre-sign-up trigger event
 * @template EventType Event type
 */
export function withAutoConfirmedCognitoUser(
  autoConfirmUser = true
): (cognitoEvent: CognitoPreSignUpEvent) => CognitoPreSignUpEvent {
  return cognitoEventResponse(response => ({
    ...response,
    autoConfirmUser,
  }));
}
