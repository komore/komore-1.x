import { createCommandType } from '@komore/command';
import { apiGatewayDomain } from './api-gateway.domain';

/**
 * API Gateway command
 */
export const apiGatewayCommand = createCommandType(apiGatewayDomain, {});
