import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Cognito event custom message request
 */
export interface CognitoEventCustomMessageRequest {
  readonly clientMetadata?: ReadonlyRecord<string, string>;
  readonly codeParameter: string;
  readonly userAttributes: ReadonlyRecord<string, string>;
  readonly usernameParameter: string;
}
