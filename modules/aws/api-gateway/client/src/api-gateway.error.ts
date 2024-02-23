import { apiGatewayDomain } from '@komore/aws/api-gateway';
import { createErrorType } from '@komore/error';

/**
 * API Gateway error
 */
export const apiGatewayError = createErrorType(apiGatewayDomain, {});
