import { type Observable } from '@komore/reactive';
import { type CognitoEvent } from './event/cognito-event';
import { type CognitoEventMap } from './event/cognito-event-map';
import { type CognitoEventResponseType } from './event/cognito-event-response-type';

type CognitoEventResponseTypes = CognitoEventResponseType<keyof CognitoEventMap>;

export function triggeredByCognitoEvent<CognitoEventResponseType extends CognitoEventResponseTypes> (
  project: (event$: Observable<CognitoEvent<keyof CognitoEventMap>>) => Observable<CognitoEventResponseType>
): (event$: Observable<CognitoEvent<keyof CognitoEventMap>>) => Observable<CognitoEventResponseType> {
  return event$ => project(event$);
}
