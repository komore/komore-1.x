import { cognitoEventResponse } from '../cognito-event-response';
import { type CognitoPreSignUpEvent } from './cognito-pre-sign-up-event';
import { type WithAutoVerifedCognitoUserOptions } from './with-auto-verified-cognito-user-options';

/**
 * Creates a function that sets the auto-verify email and phone properties on a PreSignUp event
 *
 * @param autoVerifiedOptions Auto verification options
 * @returns Function that sets the auto-verify email and phone properties on a PreSignUp event
 */
export function WithAutoVerifedCognitoUserOptions(
  autoVerifiedOptions: WithAutoVerifedCognitoUserOptions
): (cognitoEvent: CognitoPreSignUpEvent) => CognitoPreSignUpEvent {
  const { email: autoVerifyEmail, phone: autoVerifyPhone } = autoVerifiedOptions;
  return cognitoEventResponse(response => ({
    ...response,
    autoVerifyEmail,
    autoVerifyPhone,
  }));
}
