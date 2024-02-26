import { type AwsClient } from '@komore/aws';

import { type cognitoCommand } from '../cognito.command';
import { type cognitoEvent } from '../cognito.event';
import { type cognitoQuery } from '../cognito.query';
import { type cognitoError } from '../cognito.error';

/**
 * Cognito client
 */
export type CognitoClient = AwsClient<
  typeof cognitoCommand,
  typeof cognitoEvent,
  typeof cognitoQuery,
  typeof cognitoError,
  typeof cognitoCommandEventMap
>;
