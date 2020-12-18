import { GetDedicatedIpRequest, GetDedicatedIpResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves information about a dedicated IP address
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDedicatedIp.html GetDedicatedIp}
 */
export const getDedicatedIp: Command<GetDedicatedIpRequest, GetDedicatedIpResponse> = throwUnimplementedCommand(
  'GetDedicatedIp'
);
