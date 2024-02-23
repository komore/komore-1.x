import { createErrorType } from '@komore/error';

import { apiGatewayDomain } from './api-gateway.domain';

/**
 * API Gateway API error
 */
export const apiGatewayApiError = createErrorType(apiGatewayDomain, {});
