import type { CognitoEvent, CognitoEventPreSignUpTriggerSource } from '@komore/function-lambda';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { mapPreSignUpResponse } from './map-pre-sign-up-response';

export function autoVerify<EventType extends CognitoEvent<CognitoEventPreSignUpTriggerSource>>(
  autoVerifyEmail = true,
  autoVerifyPhone = true
): MonoTypeOperatorFunction<EventType> {
  return mapPreSignUpResponse<EventType>(({ response }) => ({
    ...response,
    autoVerifyEmail,
    autoVerifyPhone
  }));
}
