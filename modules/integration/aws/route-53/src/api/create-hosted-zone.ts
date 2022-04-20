import {
  CreateHostedZoneCommand,
  type CreateHostedZoneCommandInput,
  type CreateHostedZoneCommandOutput,
  type Route53Client,
} from '@aws-sdk/client-route-53';
import { sendAwsCommand } from '@komore/integration-aws';
import { type Observable } from '@komore/reactive';

/**
 * Creates a new public or private hosted zone
 *
 * @param route53Client Route 53 client
 * @param commandInput Command input
 * @returns Information about the created hosted zone
 * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html CreateHostedZone}
 */
export function createHostedZone(
  route53Client: Route53Client,
  commandInput: CreateHostedZoneCommandInput
): Observable<CreateHostedZoneCommandOutput> {
  return sendAwsCommand(route53Client, new CreateHostedZoneCommand(commandInput));
}
