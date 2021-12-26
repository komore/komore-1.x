import { cognitoEventResponse } from './cognito-event-response';
import { type CognitoEvent } from './event/cognito-event';
import { type CognitoEventPreSignUpTriggerSource } from './event/cognito-event-pre-sign-up-trigger-source';

/**
 * Creates a function that sets the auto-confirm property on a pre-sign-up trigger event
 * @param autoVerifyOptions Auto verification options
 * @returns Function that sets the auto-confirm property on a pre-sign-up trigger event
 * @template EventType Event type
 */
export function withAutoConfirm<EventType extends CognitoEvent<CognitoEventPreSignUpTriggerSource>>(
  autoConfirmUser = true
): (cognitoEvent: EventType) => EventType {
  return cognitoEventResponse(({ response }) => ({
    ...response,
    autoConfirmUser
  }));
}
