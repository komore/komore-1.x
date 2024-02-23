import { apiGatewayDomain } from '@komore/aws/api-gateway';
import { createCommandType } from '@komore/command';

/**
 * API Gateway command
 */
export const apiGatewayCommand = createCommandType(apiGatewayDomain, {});
