import { createQueryType } from '@komore/query';

import { apiGatewayDomain } from './api-gateway.domain';

/**
 * API Gateway query
 */
export const apiGatewayQuery = createQueryType(apiGatewayDomain, {});
