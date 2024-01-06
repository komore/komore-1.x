import { createErrorType } from '@komore/error';

import { apiGatewayDomain } from './api-gateway.domain';

/**
 * API Gateway error
 */
export const apiGatewayError = createErrorType(apiGatewayDomain, {});
