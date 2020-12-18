import { DeleteHostedZoneCommand, DeleteHostedZoneCommandInput, Route53Client } from '@aws-sdk/client-route-53';
import { sendCommand } from '@komore/integration-aws';

/**
 * Deletes a hosted zone
 * @param route53Client Route 53 client
 * @param commandInput Command input
 * @returns Information about the state of the operation
 * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html DeleteHostedZone}
 */
export const deleteHostedZone = (route53Client: Route53Client, commandInput: DeleteHostedZoneCommandInput) =>
  sendCommand(route53Client, new DeleteHostedZoneCommand(commandInput));
