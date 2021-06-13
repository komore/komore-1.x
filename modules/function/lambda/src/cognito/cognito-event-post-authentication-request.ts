import type { ReadonlyRecord } from '@komore/typescript';

/**
 * Cognito event post authentication request
 */
export interface CognitoEventPostAuthenticationRequest {
  readonly clientMetadata?: ReadonlyRecord<string, string>;
  readonly newDeviceUsed: boolean;
  readonly userAttributes: ReadonlyRecord<string, string>;
}
