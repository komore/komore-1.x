import {
  DeleteHostedZoneCommand,
  type ChangeInfo,
  type DeleteHostedZoneCommandInput,
  type Route53Client,
} from '@aws-sdk/client-route-53';
import { sendAwsCommand } from '@komore/integration-aws';
import { map, type Observable } from '@komore/reactive';

/**
 * Deletes a hosted zone
 *
 * @param route53Client Route 53 client
 * @param commandInput Command input
 * @returns Information about the state of the operation
 * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteHostedZone.html DeleteHostedZone}
 */
export function deleteHostedZone(
  route53Client: Route53Client,
  commandInput: DeleteHostedZoneCommandInput
): Observable<ChangeInfo> {
  return sendAwsCommand(route53Client, new DeleteHostedZoneCommand(commandInput)).pipe(
    map(output => output.ChangeInfo as ChangeInfo)
  );
}
