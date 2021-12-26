import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Cognito event user migration request
 */
export interface CognitoEventUserMigrationRequest {
  readonly clientMetadata?: ReadonlyRecord<string, string>;
  readonly password: string;
  readonly validationData?: ReadonlyRecord<string, string>;
}
