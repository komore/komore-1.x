import type { GetHostedZoneCommandInput, Route53Client } from '@aws-sdk/client-route-53';
import { GetHostedZoneCommand } from '@aws-sdk/client-route-53';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Gets a hosted zone
 * @param route53Client Route 53 client
 * @param commandInput Command input
 * @returns Information about the hosted zone
 * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html GetHostedZone}
 */
export const getHostedZone = (route53Client: Route53Client, commandInput: GetHostedZoneCommandInput) =>
  sendCommand(route53Client, new GetHostedZoneCommand(commandInput));
