import type {
  CognitoEvent,
  CognitoEventTokenGenerationResponse,
  CognitoEventTokenGenerationTriggerSource
} from '@komore/function-lambda';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

export function mapTokenGenerationResponse<EventType extends CognitoEvent<CognitoEventTokenGenerationTriggerSource>>(
  project: (event: EventType) => CognitoEventTokenGenerationResponse
): MonoTypeOperatorFunction<EventType> {
  return map(event => ({
    ...event,
    response: project(event)
  }));
}
