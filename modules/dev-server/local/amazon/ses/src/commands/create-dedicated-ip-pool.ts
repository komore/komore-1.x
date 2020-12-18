import { CreateDedicatedIpPoolRequest, CreateDedicatedIpPoolResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates a new pool of dedicated IP addresses
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateDedicatedIpPool.html CreateDedicatedIpPool}
 */
export const createDedicatedIpPool: Command<
  CreateDedicatedIpPoolRequest,
  CreateDedicatedIpPoolResponse
> = throwUnimplementedCommand('CreateDedicatedIpPool');
