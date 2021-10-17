import type { CognitoEventMap } from './cognito-event-map';

/**
 * Cognito event request type
 * @template TriggerSourceName Trigger source name
 */
export type CognitoEventRequestType<TriggerSourceName extends keyof CognitoEventMap> =
  CognitoEventMap[TriggerSourceName][0];
