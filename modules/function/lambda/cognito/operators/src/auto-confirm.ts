import type { CognitoEvent, CognitoEventPreSignUpTriggerSource } from '@komore/function-lambda/cognito';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { mapPreSignUpResponse } from './map-pre-sign-up-response';

export function autoConfirm<EventType extends CognitoEvent<CognitoEventPreSignUpTriggerSource>>(
  autoConfirmUser = true
): MonoTypeOperatorFunction<EventType> {
  return mapPreSignUpResponse<EventType>(({ response }) => ({
    ...response,
    autoConfirmUser
  }));
}
