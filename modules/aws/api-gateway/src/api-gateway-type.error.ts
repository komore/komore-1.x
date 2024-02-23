import { createErrorType } from '@komore/error';

import { apiGatewayDomain } from './api-gateway.domain';

/**
 * API Gateway type error
 */
export const apiGatewayTypeError = createErrorType(apiGatewayDomain, {});
