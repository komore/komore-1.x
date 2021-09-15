import type { CognitoEvent, CognitoEventPreSignUpTriggerSource } from '@komore/function-lambda/cognito';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { AutoVerifyOptions } from './auto-verify-options';
import { mapPreSignUpResponse } from './map-pre-sign-up-response';

/**
 * Determines which user properties are automatically verified
 * @param autoVerifyOptions Auto verification options
 * @template EventType Event type
 */
export function autoVerify<EventType extends CognitoEvent<CognitoEventPreSignUpTriggerSource>>({
  email: autoVerifyEmail,
  phone: autoVerifyPhone
}: AutoVerifyOptions): MonoTypeOperatorFunction<EventType> {
  return mapPreSignUpResponse<EventType>(({ response }) => ({
    ...response,
    autoVerifyEmail,
    autoVerifyPhone
  }));
}
