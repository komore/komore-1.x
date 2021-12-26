import { type CognitoEventMap } from './cognito-event-map';

/**
 * Cognito event response type
 * @template TriggerSourceName Trigger source name
 */
export type CognitoEventResponseType<TriggerSourceName extends keyof CognitoEventMap> =
  CognitoEventMap[TriggerSourceName][1];
