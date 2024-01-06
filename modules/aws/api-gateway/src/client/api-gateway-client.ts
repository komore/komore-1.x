import { type AwsClient } from '@komore/aws';

import { type apiGatewayCommand } from '../api-gateway.command';
import { type apiGatewayEvent } from '../api-gateway.event';
import { type apiGatewayError } from '../api-gateway.error';
import { type apiGatewayQuery } from '../api-gateway.query';

/**
 * API Gateway client
 */
export type ApiGatewayClient = AwsClient<
  typeof apiGatewayCommand,
  typeof apiGatewayEvent,
  typeof apiGatewayQuery,
  typeof apiGatewayError,
  typeof apiGatewayCommandEventMap
>;
