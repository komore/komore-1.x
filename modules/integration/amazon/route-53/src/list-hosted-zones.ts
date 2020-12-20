import { ListHostedZonesCommand, ListHostedZonesCommandInput, Route53Client } from '@aws-sdk/client-route-53';
import { sendCommand } from '@komore/integration-aws';

/**
 * Gets a hosted zone
 * @param route53Client Route 53 client
 * @param commandInput Command input
 * @returns Information about the hosted zone
 * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZones.html ListHostedZones}
 */
export const listHostedZones = (route53Client: Route53Client, commandInput: ListHostedZonesCommandInput) =>
  sendCommand(route53Client, new ListHostedZonesCommand(commandInput));
