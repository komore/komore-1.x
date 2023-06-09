import {
  ChangeResourceRecordSetsCommand,
  type ChangeInfo,
  type ChangeResourceRecordSetsCommandInput,
  type Route53Client,
} from '@aws-sdk/client-route-53';
import { sendAwsCommand } from '@komore/integration-aws';
import { map, type Observable } from '@komore/reactive';

/**
 * Creates, changes or deletes a resource record set
 *
 * @param route53Client Route 53 client
 * @param commandInput Command input
 * @returns Information about the state of the operation
 * @note {@link https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html ChangeResourceRecordSets}
 */
export function changeResourceRecordSets(
  route53Client: Route53Client,
  commandInput: ChangeResourceRecordSetsCommandInput
): Observable<ChangeInfo> {
  return sendAwsCommand(route53Client, new ChangeResourceRecordSetsCommand(commandInput)).pipe(
    map(output => output.ChangeInfo as ChangeInfo)
  );
}
