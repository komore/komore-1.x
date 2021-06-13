import type {
  CognitoEvent,
  CognitoEventMap,
  CognitoEventPreSignUpResponse,
  CognitoEventPreSignUpTriggerSource
} from '@komore/function-lambda';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

export function mapPreSignUpResponse<TriggerSourceName extends keyof CognitoEventMap>(
  project: (event: CognitoEvent<TriggerSourceName>) => CognitoEventPreSignUpResponse
): MonoTypeOperatorFunction<CognitoEvent<TriggerSourceName>> {
  return map(event => ({
    ...event,
    response: project(event)
  }));
}
