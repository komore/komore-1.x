import type { AutoVerifyOptions } from './auto-verify-options';
import { cognitoEventResponse } from './cognito-event-response';
import type { CognitoEvent } from './event/cognito-event';
import type { CognitoEventPreSignUpTriggerSource } from './event/cognito-event-pre-sign-up-trigger-source';

/**
 * Creates a function that sets the auto-verify email and phone properties on a pre-sign-up trigger event
 * @param autoVerifyOptions Auto verification options
 * @returns Function that sets the auto-verify email and phone properties on a pre-sign-up trigger event
 * @template EventType Event type
 */
export function withAutoVerify<EventType extends CognitoEvent<CognitoEventPreSignUpTriggerSource>>({
  email: autoVerifyEmail,
  phone: autoVerifyPhone
}: AutoVerifyOptions): (cognitoEvent: EventType) => EventType {
  return cognitoEventResponse(({ response }) => ({
    ...response,
    autoVerifyEmail,
    autoVerifyPhone
  }));
}
