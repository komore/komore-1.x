import { CreateHostedZoneCommand, CreateHostedZoneCommandInput, Route53Client } from '@aws-sdk/client-route-53';
import { sendCommand } from '@komore/integration-aws';

/**
 * Creates a new public or private hosted zone
 * @param route53Client Route 53 client
 * @param commandInput Command input
 * @returns Information about the created hosted zone
 * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html CreateHostedZone}
 */
export const createHostedZone = (route53Client: Route53Client, commandInput: CreateHostedZoneCommandInput) =>
  sendCommand(route53Client, new CreateHostedZoneCommand(commandInput));
