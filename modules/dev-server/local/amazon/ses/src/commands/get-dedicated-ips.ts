import { GetDedicatedIpsRequest, GetDedicatedIpsResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Lists dedicated IP addresses
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetDedicatedIps.html GetDedicatedIps}
 */
export const getDedicatedIps: Command<GetDedicatedIpsRequest, GetDedicatedIpsResponse> = throwUnimplementedCommand(
  'GetDedicatedIps'
);
