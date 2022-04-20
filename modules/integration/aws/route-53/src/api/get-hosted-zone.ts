import {
  GetHostedZoneCommand,
  type GetHostedZoneCommandInput,
  type GetHostedZoneCommandOutput,
  type Route53Client,
} from '@aws-sdk/client-route-53';
import { sendAwsCommand } from '@komore/integration-aws';
import { type Observable } from '@komore/reactive';

/**
 * Gets a hosted zone
 *
 * @param route53Client Route 53 client
 * @param commandInput Command input
 * @returns Information about the hosted zone
 * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetHostedZone.html GetHostedZone}
 */
export function getHostedZone(
  route53Client: Route53Client,
  commandInput: GetHostedZoneCommandInput
): Observable<GetHostedZoneCommandOutput> {
  return sendAwsCommand(route53Client, new GetHostedZoneCommand(commandInput));
}
