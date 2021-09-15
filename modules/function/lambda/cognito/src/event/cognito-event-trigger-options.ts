import type { CognitoEventMap } from './cognito-event-map';

/**
 * Cognito event trigger options
 */
export interface CognitoEventTriggerOptions<TriggerSourceNames extends ReadonlyArray<keyof CognitoEventMap>> {
  readonly triggerSources: TriggerSourceNames;
}
