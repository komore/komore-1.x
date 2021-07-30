import type {
  CognitoEvent,
  CognitoEventPreSignUpResponse,
  CognitoEventPreSignUpTriggerSource
} from '@komore/function-lambda/cognito';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

export function mapPreSignUpResponse<EventType extends CognitoEvent<CognitoEventPreSignUpTriggerSource>>(
  project: (event: EventType) => CognitoEventPreSignUpResponse
): MonoTypeOperatorFunction<EventType> {
  return map(event => ({
    ...event,
    response: project(event)
  }));
}
