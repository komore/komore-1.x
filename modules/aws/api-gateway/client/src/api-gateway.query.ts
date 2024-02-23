import { apiGatewayDomain } from '@komore/aws/api-gateway';
import { createQueryType } from '@komore/query';

/**
 * API Gateway query
 */
export const apiGatewayQuery = createQueryType(apiGatewayDomain, {});
